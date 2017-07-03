import {Book} from './../models';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'k-book-edit',
    templateUrl: './book-edit.component.html'
})
export class BookEditComponent {

    public currentBook: Book = new Book();
    public error: string;
    public pageName: string = 'bookList';

    @ViewChild('editBookForm') form: NgForm;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService,
                private bookService: BookService) {
        this.route.params
            .filter(params => params['bookId'] !== 'add')
            .switchMap(params => this.bookService.get(params['bookId']))
            .subscribe(book => this.currentBook = book);

        this.route.params
            .filter(params => params['bookId'] === 'add')
            .subscribe(book => this.currentBook = new Book());
    }

    formHandler(bookAction$: Observable<Book | any>, addNew: boolean): void {
        this.form.form.disable();
        bookAction$.subscribe(response => {
            if (addNew) {
                this.currentBook = new Book();
                this.router.navigate(['/books', 'add']);
            } else {
                const user = this.authService.getCurrentUser();
                this.router.navigate(['/', user.nickname, 'books'], {queryParams: {u: user.id}});
            }
        }, error => this.error = error, () => {
            this.form.form.enable();
        });
    }

    saveAndClose() {
        this.formHandler(this.bookService.update(this.currentBook), false);
    }

    saveAndAdd() {
        this.formHandler(this.bookService.update(this.currentBook), true);
    }

    remove() {
        this.formHandler(this.bookService.remove(this.currentBook.id), false);
    }
}

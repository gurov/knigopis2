import { Book } from '../models';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "../services/book.service";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms";
import { WishService } from "../services/wish.service";

@Component({
    selector: 'k-book-edit',
    templateUrl: './book-edit.component.html'
})
export class BookEditComponent {

    public currentBook: Book = new Book();
    public error: string;
    public pageName: string = 'bookList';
    public wishId: string = null;

    @ViewChild('editBookForm') form: NgForm;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private wishService: WishService,
        private bookService: BookService) {
        this.route.params
            .filter(params => params['bookId'] !== 'add')
            .switchMap(params => this.bookService.get(params['bookId']))
            .subscribe(book => this.currentBook = book);

        this.route.params
            .filter(params => params['bookId'] === 'add')
            .combineLatest(this.route.queryParams)
            .switchMap(([params, queryParams]) => {
                if (queryParams['w']) {
                    this.wishId = queryParams['w'];
                    return this.wishService.get(this.wishId);
                }
                if (queryParams['ob']) {
                    return this.bookService.get(queryParams['ob'])
                        .map(book => {
                            const newBook = new Book();
                            newBook.author = book.author;
                            newBook.title = book.title;
                            newBook.notes = `Увидел у ${book.user.nickname}`;
                            if (book.notes) {
                                newBook.notes += ` с примечанием: ${book.notes}`;
                            }
                            return newBook;
                        });
                }
                return Observable.of(new Book());
            })
            .subscribe(book => this.currentBook = book);
    }

    formHandler(bookAction$: Observable<Book | any>, addNew: boolean): void {
        this.form.form.disable();
        bookAction$.subscribe(() => {

            if (this.wishId) {
                this.wishService.remove(this.wishId).subscribe();
            }

            if (addNew) {
                this.currentBook = new Book();
                this.router.navigate(['/books', 'add']);
            } else {
                const user = this.authService.getCurrentUser();
                this.router.navigate(['/', user.nickname, 'books'], { queryParams: { u: user.id } });
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

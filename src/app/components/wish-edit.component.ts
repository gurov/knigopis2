import {Book} from './../models';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import {NgForm} from "@angular/forms";
import {WishService} from "../services/wish.service";

@Component({
    selector: 'k-wish-edit',
    templateUrl: './book-edit.component.html'
})
export class WishEditComponent {

    private currentBook: Book = new Book();
    private error: string;
    private pageName: string = 'wish';

    @ViewChild('editBookForm') form: NgForm;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService,
                private wishService: WishService) {
        this.route.params
            .filter(params => params['bookId'] !== 'add')
            .switchMap(params => this.wishService.get(params['bookId']))
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
                this.router.navigate(['/wish', 'add']);
            } else {
                const user = this.authService.getCurrentUser();
                this.router.navigate(['/wish', 'list']);
            }
        }, error => this.error = error, () => {
            this.form.form.enable();
        });
    }

    saveAndClose() {
        this.formHandler(this.wishService.update(this.currentBook), false);
    }

    saveAndAdd() {
        this.formHandler(this.wishService.update(this.currentBook), true);
    }

    remove() {
        this.formHandler(this.wishService.remove(this.currentBook.id), false);
    }
}

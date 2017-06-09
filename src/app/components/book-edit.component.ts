import { Book } from './../models';
import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "../services/book.service";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'k-book-edit',
    templateUrl: './book-edit.component.html'
})
export class BookEditComponent {

    private currentBook: Book = new Book();
    private error: string;

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

    saveAndClose() {
        this.form.form.disable();
        this.bookService.update(this.currentBook).subscribe(response => {
            const user = this.authService.getCurrentUser();
            this.router.navigate(['/', user.nickname, 'books'], { queryParams: { u: user.id } });
        }, error => this.error = error, () => {
            this.form.form.enable();
        });
    }

    saveAndAdd() {
        this.form.form.disable();
        this.bookService.update(this.currentBook).subscribe(response => {
            this.currentBook = new Book();
            this.router.navigate(['/books', 'add']);
        }, error => this.error = error, () => {
            this.form.form.enable();
        });
    }

    remove() {
        this.form.form.disable();
        this.bookService.remove(this.currentBook.id).subscribe(response => {
            const user = this.authService.getCurrentUser();
            this.router.navigate(['/', user.nickname, 'books'], { queryParams: { u: user.id } });
        }, error => this.error = error, () => {
            this.form.form.enable();
        });
    }
}

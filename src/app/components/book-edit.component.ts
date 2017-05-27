import { Book } from './../models';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../services/book.service";

@Component({
    selector: 'k-book-edit',
    templateUrl: './book-edit.component.html'
})
export class BookEditComponent {

    private currentBook: Book = new Book();

    constructor(private route: ActivatedRoute, private bookService: BookService) {
        this.route.params
            .switchMap(params => this.bookService.get(params['bookId']))
            .subscribe(book => this.currentBook = book);
    }

    save() {
        this.bookService.update(this.currentBook).subscribe(response => {
            console.log('bookService.update', response);
        });
    }
}

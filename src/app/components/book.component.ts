import { Book } from './../models';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'k-book',
    templateUrl: './book.component.html'
})
export class BookComponent {
    @Input() book: Book = new Book();

    constructor() {

    }
}

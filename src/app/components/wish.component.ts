import { Book } from './../models';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'k-wish',
    templateUrl: './wish.component.html'
})
export class WishComponent {
    @Input() book: Book;

    constructor() {

    }
}

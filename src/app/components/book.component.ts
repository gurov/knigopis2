import { Book } from '../models';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'k-book',
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
    @Input() book: Book = new Book();
    public isMyBook: boolean = true;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.isMyBook = this.authService.getCurrentUser().id === this.book.userId;
    }

}

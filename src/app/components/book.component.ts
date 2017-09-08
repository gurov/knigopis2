import { Book } from '../models';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'k-book',
    templateUrl: './book.component.html'
})
export class BookComponent implements OnChanges, OnInit {
    @Input() book: Book = new Book();
    public isMyBook: boolean = true;
    public isAuth: boolean = false;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.isAuthorized.subscribe(isAuth => this.isAuth = isAuth);
    }

    ngOnChanges() {
        this.isMyBook = this.authService.getCurrentUser() && this.authService.getCurrentUser().id === this.book.userId;
    }

}

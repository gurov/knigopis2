import { UserService } from './../services/user.service';
import { BookService } from './../services/book.service';
import { Book, List, User, SubUser } from './../models';
import { Component, OnInit, OnChanges } from '@angular/core';
import { SubscriptionService } from "../services/subscriptions.service";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'k-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public latestNoteBooks: Book[];
    public latestUsers: User[];
    public subscriptions: SubUser[] = [];

    constructor(private bookService: BookService,
        private subscriptionService: SubscriptionService,
        private authService: AuthService,
        private userService: UserService) {

        this.bookService.getLatestNotes().subscribe((list: List<Book>) => {
            this.latestNoteBooks = Object.keys(list).map(key => list[key]);
        });

        this.userService.getLatest().subscribe((list: List<User>) => {
            this.latestUsers = Object.keys(list).map(key => list[key]);
        });

    }

    ngOnInit () {
        this.authService.isAuthorized
            .switchMap(isAuth => {
                return isAuth
                    ? this.subscriptionService.getAll()
                    : Observable.of([]);
            })
            .subscribe(sub => this.subscriptions = sub);
    }
}

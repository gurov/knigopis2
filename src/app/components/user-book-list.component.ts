import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Book, User, List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'k-user-books',
    templateUrl: './user-book-list.component.html'
})
export class UserBookListComponent implements OnInit {

    private userBooks: Book[];
    private userId: string;
    private user: User = new User();
    private routeSub: Subscription;
    private bookGroups = [];

    constructor(private userService: UserService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.routeSub = this.route.queryParams
            .switchMap(params => {
                this.userId = params['u'];

                this.userService.getUserInfo(this.userId)
                    .subscribe((user: User) => this.user = user);

                return this.userService.getUserBooks(params['u']);
            })
            .subscribe((list: Book[]) => {
                this.userBooks = list;
                const years = new Set(list.map(i => i.readYear));
                this.bookGroups = Array.from(years)
                    .sort()
                    .reverse()
                    .map(y => {
                        return {
                            year: y,
                            count: this.userBooks.filter(b => b.readYear === y).length
                        };
                    });
            });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }


}

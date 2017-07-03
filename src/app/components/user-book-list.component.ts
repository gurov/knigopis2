import {ActivatedRoute} from '@angular/router';
import {UserService} from './../services/user.service';
import {Book, User} from './../models';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'k-user-books',
    templateUrl: './user-book-list.component.html'
})
export class UserBookListComponent implements OnInit {

    public userBooks: Book[];
    public userId: string;
    public user: User = new User();
    public bookGroups = [];
    public error: string = '';

    constructor(private userService: UserService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.queryParams
            .switchMap(params => {
                this.userId = params['u'];

                this.userService.getUserInfo(this.userId)
                    .subscribe((user: User) => this.user = user);

                return this.userService.getUserBooks(params['u']);
            })
            .subscribe(this.bookLoadSucces, this.bookLoadFail);

    }

    bookLoadSucces = (list: Book[]) => {
        this.userBooks = list;
        const years = new Set(list.map(i => i.readYear));
        this.bookGroups = Array.from(years).sort().reverse()
            .map(y => ({
                year: y,
                count: this.userBooks.filter(b => b.readYear === y).length
            }));
    };

    bookLoadFail = (error: string) => {
        this.error = error;
        this.userBooks = [];
        this.user = new User();
        this.bookGroups = [];
    };

}

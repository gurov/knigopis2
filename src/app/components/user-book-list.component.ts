import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Book, User } from './../models';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'k-user-books',
    templateUrl: './user-book-list.component.html'
})
export class UserBookListComponent implements OnInit, AfterViewInit {

    public userBooks: Book[] = [];
    public userId: string;
    public user: User = new User();
    public bookGroups = [];
    public error: string = '';
    public search: string;

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

    ngAfterViewInit() {
        this.route.queryParams
            .subscribe(params => {
                if (params['y']) {
                    const el = document.getElementById('y-' + params['y']);
                    if (el) {
                        const offsets = el.getBoundingClientRect();
                        const top = offsets.top;
                        window.scrollTo(0, top - 70);
                    }
                } else {
                    window.scrollTo(0, 0);
                }
            });
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

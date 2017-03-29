import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Book, User, List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'k-user-books',
    templateUrl: './user-book-list.component.html'
})
export class UserBookListComponent implements OnInit {

    private userBooks: Book[];
    private userId: string;

    constructor(private userService: UserService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.queryParams
            .switchMap(params => this.userService.getUserBooks(params['u']))
            .subscribe((list: Book[]) => {
                this.userBooks = list;
            });
    }


}

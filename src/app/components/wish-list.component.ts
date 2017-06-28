import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Book, User, List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { WishService } from "../services/wish.service";

@Component({
    selector: 'k-wish-list',
    templateUrl: './wish-list.component.html'
})
export class WishListComponent {

    private wishList: Book[];
    private userId: string;
    private user: User = new User();
    private routeSub: Subscription;
    private bookGroups = [];
    private error: string = '';

    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private wishService: WishService) {
        this.wishService.getAll()
            .subscribe(response => this.wishList = response.sort((a, b) => b.priority - a.priority));
    }

}

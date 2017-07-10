import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Book, User } from './../models';
import { Component } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { WishService } from "../services/wish.service";

@Component({
    selector: 'k-wish-list',
    templateUrl: './wish-list.component.html'
})
export class WishListComponent {

    public wishList: Book[];
    public userId: string;
    public user: User = new User();
    public routeSub: Subscription;
    public bookGroups = [];
    public error: string = '';

    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private wishService: WishService) {
        this.wishService.getAll()
            .subscribe(response => this.wishList = response.sort((a, b) => b.priority - a.priority));
    }

}

import { Book } from '../models';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { SubscriptionService } from "../services/subscriptions.service";

@Component({
    selector: 'k-star',
    templateUrl: 'star.component.html'
})
export class StarComponent implements OnInit {
    @Input() userId: string;

    public isMySub: boolean = true;
    public itsMe: boolean = true;
    public loading: boolean = false;
    public isAuth: boolean = false;

    constructor(private authService: AuthService,
                private subscriptionService: SubscriptionService) {
    }

    ngOnInit() {
        this.authService.isAuthorized
            .subscribe(isAuth => {
                this.isAuth = isAuth;
                if (isAuth) {
                    this.itsMe = this.authService.getCurrentUser().id === this.userId;
                    this.isMySub = this.userId in this.authService.getCurrentUser().subscriptions;
                    if (this.isMySub) {
                        this.subscriptionService.update(this.userId).subscribe();
                    }
                } else {
                    this.itsMe = true;
                    this.isMySub = true;
                }
            });

    }

    subscribe() {
        this.loading = true;
        this.subscriptionService.create(this.userId)
            .finally(() => this.loading = false)
            .subscribe(() => {
                const user = this.authService.getCurrentUser();
                user.subscriptions[this.userId] = 1;
                this.authService.setCurrentUser(user);
                this.isMySub = true;
            });
    }

    unsubscribe() {
        this.loading = true;
        this.subscriptionService.delete(this.userId)
            .finally(() => this.loading = false)
            .subscribe(() => {
                const user = this.authService.getCurrentUser();
                delete user.subscriptions[this.userId];
                this.authService.setCurrentUser(user);
                this.isMySub = false;
            });
    }


}

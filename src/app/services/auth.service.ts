import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { User } from "../models";

@Injectable()
export class AuthService {

    private authHook: Subject<string> = new Subject();
    private currentUser: User;
    public isAuthorized: Subject<boolean> = new Subject();

    constructor(private userService: UserService) {
        window['authHook'] = this.authHook;

        const accessToken = localStorage.getItem('access-token');

        if (accessToken) {
            this.userService.getCurrentUser().subscribe(user => {
                this.currentUser = user;
                this.isAuthorized.next(true);
            }, () => {
                this.isAuthorized.next(false);
            })
        } else {
            this.isAuthorized.next(false);
        }
    }

    setAuthHook() {
        this.authHook
            .switchMap(authToken => this.userService.getCredentials(authToken))
            .subscribe(credentials => {
                localStorage.setItem('access-token', credentials['access-token']);
                this.currentUser = credentials.user;
                this.isAuthorized.next(true);
            });
    }

    getCurrentUser(): User {
        return this.currentUser;
    }

    setCurrentUser(user: User): void {
        this.currentUser = user;
    }

    clear() {
        localStorage.setItem('access-token', '');
        this.currentUser = null;
        this.isAuthorized.next(false);
    }

}

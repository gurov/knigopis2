import { UserService } from './user.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {

    private authHook: Subject<string> = new Subject();

    constructor(private userService: UserService) {
        window['authHook'] = this.authHook;
    }

    setAuthHook() {

        this.authHook
            .switchMap(authToken => this.userService.getCredentials(authToken))
            .subscribe(accessToken => {
                console.log('accessToken', accessToken);
            });

    }


}

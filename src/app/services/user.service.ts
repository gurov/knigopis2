import { Book, Credentials, List, User } from './../models';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

    private path: string = '/users';

    constructor(private api: ApiService) {
    }

    getLatest(): Observable<List<User>> {
        return this.api.get(this.path + '/latest');
    }

    getUserBooks(userId: string): Observable<Book[]> {
        return this.api.get(`${this.path}/${userId}/books`);
    }

    getUserInfo(userId: string): Observable<User> {
        return this.api.get(this.path + '/' + userId);
    }

    getCredentials(authToken: string): Observable<Credentials> {
        return this.api.post(this.path + '/get-credentials', { token: authToken });
    }

    getCurrentUser(): Observable<User> {
        return this.api.get(this.path + '/current');
    }

    saveUser(user: User): Observable<User> {
        return this.api.put(this.path + '/' + user.id, user);
    }
}

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SubUser } from "../models";

@Injectable()
export class SubscriptionService {

    private path: string = '/subscriptions';

    constructor(private api: ApiService) {
    }

    getAll(): Observable<SubUser[]> {
        return this.api.get(this.path);
    }

    create(userId: string): Observable<any> {
        return this.api.post(`${this.path}/${userId}`, {});
    }

    update(userId: string): Observable<any> {
        return this.api.put(`${this.path}/${userId}`, {});
    }


    delete(userId: string): Observable<any> {
        return this.api.delete(`${this.path}/${userId}`);
    }

}

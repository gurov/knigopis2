import { ApiService } from './api.service';
import { Book, List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { WishService } from "./wish.service";

@Injectable()
export class BookService extends WishService {

    protected path: string = '/books';

    constructor(protected api: ApiService) {
        super(api);
    }

    getLatestNotes(): Observable<List<Book>> {
        return this.api.get(this.path + '/latest-notes');
    }

}

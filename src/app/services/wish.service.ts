import { ApiService } from './api.service';
import { Book, List } from './../models';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class WishService {

    protected path: string = '/wishes';

    constructor(protected api: ApiService) {
    }

    getLatestNotes(): Observable<List<Book>> {
        return this.api.get(this.path + '/latest-notes');
    }

    get(bookId: string): Observable<Book> {
        return this.api.get(`${this.path}/${bookId}`);
    }

    getAll(): Observable<Book[]> {
        return this.api.get(this.path);
    }

    update(book: Book): Observable<Book> {
        return book.id
            ? this.api.put(this.path + '/' + book.id, book)
            : this.api.post(this.path, book);
    }

    remove(bookId: string): Observable<any> {
        return this.api.delete(this.path + '/' + bookId);
    }
}

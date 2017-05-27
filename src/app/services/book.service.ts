import { ApiService } from './api.service';
import { List, Book } from './../models';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  private path: string = '/books';
  constructor(private api: ApiService) { }

  getLatestNotes(): Observable<List<Book>> {
    return this.api.get(this.path + '/latest-notes');
  }

  get(bookId: string): Observable<Book> {
    return this.api.get(this.path + '/' + bookId);
  }

  update(book: Book): Observable<Book> {
    return this.api.put(this.path + '/' + book.id, book);
  }

}

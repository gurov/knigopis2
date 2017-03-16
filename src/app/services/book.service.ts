import { List, Book } from './../models';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class BookService {

  private path: string = '/books';
  constructor(private http: Http) { }

  getLatestNotes(): Observable<List<Book>> {
    return this.http.get(this.path + '/latest-notes')
      .map(data => data.text() ? data.json() : data);
  }

}

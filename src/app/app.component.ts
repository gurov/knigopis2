import { List, Book } from './models';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';

@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k works!';
  private latestNoteBooks: Book[];

  constructor(private bookService:BookService) {
    this.bookService.getLatestNotes().subscribe((list: List<Book>) => {
      this.latestNoteBooks = Object.keys(list).map(key => list[key]);
    });

  }

}

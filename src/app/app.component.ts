import { UserService } from './services/user.service';
import { List, Book, User } from './models';
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
  private latestUsers: User[];

  constructor(private bookService:BookService, private userService:UserService) {
    this.bookService.getLatestNotes().subscribe((list: List<Book>) => {
      this.latestNoteBooks = Object.keys(list).map(key => list[key]);
    });

    this.userService.getLatest().subscribe((list: List<User>) => {
      this.latestUsers = Object.keys(list).map(key => list[key]);
    });

  }

}

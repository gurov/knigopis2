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

  constructor() {
  }

}

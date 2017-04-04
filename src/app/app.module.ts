import { BookComponent } from './components/book.component';
import { UserBookListComponent } from './components/user-book-list.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { ApiService } from "./services/api.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YearSortPipe } from './pipes/year-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserBookListComponent,
    BookComponent,
    YearSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService, UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

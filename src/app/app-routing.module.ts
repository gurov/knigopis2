import { UserBookListComponent } from './components/user-book-list.component';
import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from "./components/book-edit.component";
import { WishListComponent } from "./components/wish-list.component";
import { WishEditComponent } from "./components/wish-edit.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: []
    },
    {
        path: ':name/books',
        component: UserBookListComponent
    },
    {
        path: 'books/:bookId',
        component: BookEditComponent
    },
    {
        path: 'wish/list',
        component: WishListComponent
    },
    {
        path: 'wish/edit/:bookId',
        component: WishEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

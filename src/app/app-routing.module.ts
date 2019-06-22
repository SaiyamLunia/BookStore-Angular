import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '',redirectTo: '/book_dashboard',pathMatch: 'full' },
  // { path: 'book_dashboard',component: BookListComponent },
  { path: 'book_dashboard',component: BooksComponent},
  { path: 'create',component: CreateBookComponent },
  { path: 'edit',component: EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

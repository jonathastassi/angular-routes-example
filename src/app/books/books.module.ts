import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookDetailComponent } from './pages/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './pages/book/book-authors/book-authors.component';
import { MaterialModule } from '../material.module';
import { BookComponent } from './pages/book/book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule
  ]
})
export class BooksModule { }

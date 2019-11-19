import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './pages/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './pages/book/book-authors/book-authors.component';
import { BookComponent } from './pages/book/book.component';


const routes: Routes = [
  {
    path: '', component: BookComponent,
    children: [
      {
        path: ':index', component: BookDetailComponent,
        children: [
          {
            path: 'authors',
            children: [
              { path: 'authors', component: BookAuthorsComponent }
            ]
          }
        ],
      },
    ]
  },    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

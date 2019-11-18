import { BookDetailComponent } from './pages/book/book-detail/book-detail.component';
import { DvdFormComponent } from './pages/dvd/dvd-form/dvd-form.component';
import { DvdDetailComponent } from './pages/dvd/dvd-detail/dvd-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvdComponent } from './pages/dvd/dvd.component';
import { BookComponent } from './pages/book/book.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: 'books', component: BookComponent,
    children: [
      { path: ':index', component: BookDetailComponent },  
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

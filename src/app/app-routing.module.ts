import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: 'dvds',
    loadChildren: './dvds/dvds.module#DvdsModule'
  },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule'
  },    
  {
    path: 'electronics',
    loadChildren: './electronics/electronics.module#ElectronicsModule'
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

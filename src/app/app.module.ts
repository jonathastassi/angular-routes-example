import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './pages/book/book.component';
import { DvdComponent } from './pages/dvd/dvd.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './pages/dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './pages/dvd/dvd-form/dvd-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './pages/book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private service: BookService) { }

  ngOnInit() {
    this.books$ = this.service.books$;
    console.log(this.service.books$);
  }

}

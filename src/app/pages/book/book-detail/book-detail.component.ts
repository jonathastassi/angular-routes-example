import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = null;
  
  constructor(
    private route: ActivatedRoute,
    private service: BookService
  ) { }

  ngOnInit() {
    console.log("index ", this.route.snapshot.paramMap.get('index'));

    this.route.paramMap
      .subscribe((param: ParamMap) => {
        this.book$ = this.service.get(+param.get('index'));
      });
  }

}

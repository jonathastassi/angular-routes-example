import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/books/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = null;
  index: number;
  authors: string[];

  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        tap((params: ParamMap) => this.index = +params.get('index')),
        switchMap((params: ParamMap) => this.service.get(+params.get('index'))),
        tap((book: Book) => this.authors = book ? book.authors : [])
      );
  }

  remove() {
    this.service.remove(this.index);
    this.router.navigate(['books']);
  }

  goAuthors() {
    this.router.navigate(['books/' + this.index + '/authors', {authors: this.authors}]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {

  authors$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authors$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => (params.get('authors').split(',')))
      );
  }

}

import { Dvd } from './../../models/dvd';
import { DvdService } from './../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;

  constructor(
    private service: DvdService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dvds$ = this.service.dvds$;
  }

  goDetails(i: number, dvd: Dvd) {
    this.router.navigate([`dvds/${i}`, { title: dvd.title }]);
  }

  remove(i: number) {
    this.service.remove(i);
  }
}

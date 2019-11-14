import { Dvd } from './../../../models/dvd';
import { DvdService } from './../../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;

  constructor(
    private route: ActivatedRoute,
    private service: DvdService,
    private router: Router
  ) { }

  ngOnInit() {
    const index: number = +this.route.snapshot.paramMap.get('index');

    this.dvd$ = this.service.get(index);
    // console.log(this.route.snapshot.paramMap.get('index'));
    // console.log(this.route.snapshot.params.index);
    // this.route.paramMap
    //   .subscribe((param: ParamMap) => console.log(param.get('index')));
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}

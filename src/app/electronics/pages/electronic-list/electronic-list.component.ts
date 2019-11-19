import { Component, OnInit } from '@angular/core';
import { ElectronicService } from '../../services/electronic.service';
import { Observable } from 'rxjs';
import { Electronic } from '../../models/electronic';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {

  electronics$: Observable<Electronic[]>;

  constructor(
    private service: ElectronicService
  ) { }

  ngOnInit() {
    this.electronics$ = this.service.electronics$;
  }

}

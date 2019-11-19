import { DvdService } from './../../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.css']
})
export class DvdFormComponent implements OnInit {

  formDvd = this.fb.group({
    title: [''],
    year: [''],
    genre: ['']
  });

  constructor(
    private fb: FormBuilder,
    private service: DvdService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.add(this.formDvd.value);
    this.router.navigate(['/dvds']);
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }
}

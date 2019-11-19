import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvdsRoutingModule } from './dvds-routing.module';
import { DvdComponent } from './pages/dvd/dvd.component';
import { DvdFormComponent } from './pages/dvd/dvd-form/dvd-form.component';
import { DvdDetailComponent } from './pages/dvd/dvd-detail/dvd-detail.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DvdComponent,
    DvdFormComponent,
    DvdDetailComponent
  ],
  imports: [
    CommonModule,
    DvdsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class DvdsModule { }

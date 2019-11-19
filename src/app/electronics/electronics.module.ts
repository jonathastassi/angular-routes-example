import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicDetailComponent } from './pages/electronic-list/electronic-detail/electronic-detail.component';
import { ElectronicListComponent } from './pages/electronic-list/electronic-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ElectronicListComponent, ElectronicDetailComponent],
  imports: [
    CommonModule,
    ElectronicsRoutingModule,
    MaterialModule
  ]
})
export class ElectronicsModule { }

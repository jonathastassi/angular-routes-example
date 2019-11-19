import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DvdComponent } from './pages/dvd/dvd.component';
import { DvdFormComponent } from './pages/dvd/dvd-form/dvd-form.component';
import { DvdDetailComponent } from './pages/dvd/dvd-detail/dvd-detail.component';

const routes: Routes = [
  { path: '', component: DvdComponent },
  { path: 'new', component: DvdFormComponent },
  { path: ':index', component: DvdDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DvdsRoutingModule { }

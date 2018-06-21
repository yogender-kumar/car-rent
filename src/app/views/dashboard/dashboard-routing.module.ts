import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '../../shared/constants';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
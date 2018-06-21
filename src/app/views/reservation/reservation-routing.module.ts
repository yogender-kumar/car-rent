import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationResolver } from '../../shared/provider/reservation.resolver';

import { ROUTES } from '../../shared/constants';

import { AddModifyComponent } from './add-modify/add-modify.component';
import { ReservationComponent } from './reservation.component';


const routes: Routes = [{
  path: '',
  component: ReservationComponent,
  resolve: {
    reservations: ReservationResolver
  }
},{
    path: ROUTES.RESERVATION.CHILD.ADD,
    component: AddModifyComponent
  },{
    path: ROUTES.RESERVATION.CHILD.EDIT,
    component: AddModifyComponent
  }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class ReservationRoutingModule { }


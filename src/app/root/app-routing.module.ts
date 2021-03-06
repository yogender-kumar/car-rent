import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarResolver } from '../shared/provider/car.resolver';

import { ROUTES } from '../shared/constants';

const routes: Routes = [{
  path: ROUTES.ROOT.PATH,
  /**
  * not able to lazyload component by defining `loadChildren` value `ROUTES`
  * So declaring `loadChildren` values inline, will figure out the issue later
  */
  loadChildren: "../views/dashboard/dashboard.module#DashboardModule"
},{
  path: ROUTES.RESERVATION.PATH,
  loadChildren: "../views/reservation/reservation.module#ReservationModule",
  resolve: {
    cars: CarResolver
  }
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

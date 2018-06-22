import { NgModule } from '@angular/core';
import { AddModifyComponent } from './add-modify/add-modify.component';
import { ReservationRoutingModule } from './/reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { SharedModule } from '../../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReservationRoutingModule
  ],
  declarations: [AddModifyComponent, ReservationComponent]
})
export class ReservationModule { }

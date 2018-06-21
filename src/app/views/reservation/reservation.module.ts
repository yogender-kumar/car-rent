import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModifyComponent } from './add-modify/add-modify.component';
import { ReservationRoutingModule } from './/reservation-routing.module';
import { ReservationComponent } from './reservation.component';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule
  ],
  declarations: [AddModifyComponent, ReservationComponent]
})
export class ReservationModule { }

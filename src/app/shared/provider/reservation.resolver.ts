import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { ReservationsService } from '../service/reservations.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationResolver implements Resolve<Array<any>> {

  constructor(
    private reservationService: ReservationsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.reservationService.getReservations();
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(
    private http: HttpClient
  ) { }

  getReservations(): Observable<any> {
    return this.http.get(API.HOST+API.BASE+API.RESERVATION);
  }
}

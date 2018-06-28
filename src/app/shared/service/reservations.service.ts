import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  API: string = API.HOST + API.BASE + API.RESERVATION;
  constructor(
    private http: HttpClient
  ) { }

  /**
   * This method returns an Observable of get reservation(s)
   * @param resId 
   */
  getReservations(resId?: string): Observable<any> {
    let api = this.API + (resId ? '/' + resId : '');
    return this.http.get(api);
  }
  /**
   * This method returns an Observable of update reservation
   * @param resId 
   * @param payload 
   */
  updateReservation(resId: string, payload: object): Observable<any> {
    return this.http.put(this.API + '/' + resId, payload);
  }

  /**
   * This method returns an Observable of create reservation
   * @param payload 
   */
  createReservation(payload: object): Observable<any> {
    return this.http.post(this.API, payload);
  }

  deleteReservation(resId: string): Observable<any> {
    return this.http.delete(this.API + '/' + resId);
  }
}

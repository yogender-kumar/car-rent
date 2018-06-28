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

  getReservations(resId?: string): Observable<any> {
    let api = API.HOST + API.BASE + API.RESERVATION + (resId ? '/' + resId : '');
    return this.http.get(api);
  }
}

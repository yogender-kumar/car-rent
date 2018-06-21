import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { CarsService } from '../service/cars.service';

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<Array<any>> {

  constructor(
    private carsService: CarsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.carsService.getCars();
  }
}

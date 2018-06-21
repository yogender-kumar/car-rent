import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;
  reservations:Array<object>;
  cars: Array<object>;
  
  constructor(
    private route: ActivatedRoute
  ) {
    this.cars = this.route.snapshot.data['cars'];
    this.reservations = this.groupReservationByCarId(this.route.snapshot.data['reservations']);
  }
  
  ngOnDestroy() {}
  
  ngOnInit() {
  }

  /**
   * This method groups all the reservation by carId
   * @param data contains list of reservations
   * @returns the new list of reservation grouped by carId
   */
  private groupReservationByCarId(data): Array<object> {
    let groups = data.reduce( (accumulator, reservation) => {
      if(!accumulator[reservation.carId]){
        accumulator[reservation.carId] = [];
      }
      accumulator[reservation.carId].push(reservation);
      return accumulator;
    }, {});
    
    let groupedList = Object.keys(groups).map(
      carId => (
        {
          carId: carId,
          carData: this.getCarByCarId(carId),
          data: this.sortByDate(groups[carId])
        }
      )
    );
    return groupedList;
  }

  /**
   * This method sort reservations based on `from` date
   * @param data contains list of reservations
   * @returns the list, sorted by `from`
   */
  private sortByDate(data): Array<object>{
    return data.sort( (item1, item2) => {
      let date1 = Date.parse(item1.from);
      let date2 = Date.parse(item2.from);
      if( date1 < date2 ){
        return -1;
      }else if( date1 > date2 ){
        return 1;
      }
      return 0;
    });
  }

  /**
   * This method returns Car details from the `this.cars` list
   * @param id contains carId
   * @returns the object of car details
   */
  private getCarByCarId(id): Object {
    return this.cars.find( car => car['id'] == id);
  }
  
}

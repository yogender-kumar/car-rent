import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  reservations:Array<object>;
  cars: Array<object>;
  maxDate: object;
  minDate: object;
  allDates: Array<object>;
  
  constructor(
    private route: ActivatedRoute
  ) {
    let sortedByFromDate = this.sortByDate(this.route.snapshot.data['reservations']);
    this.cars = this.route.snapshot.data['cars'];
    this.reservations = this.groupReservationByCarId(sortedByFromDate);

    let sortedByToDate = this.sortByDate([].concat(sortedByFromDate), true);
    this.minDate = new Date(sortedByFromDate[0]['from']);
    this.maxDate = new Date(sortedByToDate[sortedByToDate.length -1]['to']);
    this.allDates = this.getDatesBetweenMinAndMax(this.minDate, this.maxDate);
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
          data: groups[carId]
        }
      )
    );
    return groupedList;
  }

  /**
   * This method sort reservations based on `from` date
   * @param data contains list of reservations
   * @param isSortedByToDate if true then sort the list by `to` date node value
   * @returns the list, sorted by `from`
   */
  private sortByDate(data, isSortedByToDate?: boolean): Array<object>{
    return data.sort( (item1, item2) => {
      let date1 = isSortedByToDate ? Date.parse(item1.to) : Date.parse(item1.from);
      let date2 = isSortedByToDate ? Date.parse(item2.to) : Date.parse(item2.from);
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

  /**
   * This method returns all dates between Start and End Date
   * @param start date object
   * @param end date object
   * @returns list of date objects from Start and End date
   */
  private getDatesBetweenMinAndMax(start, end) {
    let startDate = new Date(start.toString());
    let dateArray = [];

    while(startDate < end){
      dateArray.push( new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    return dateArray;
  }
  
}

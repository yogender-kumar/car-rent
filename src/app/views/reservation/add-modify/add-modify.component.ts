import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Subscription } from 'rxjs';
import { ReservationsService } from '../../../shared/service/reservations.service';



@Component({
  selector: 'app-add-modify',
  templateUrl: './add-modify.component.html',
  styleUrls: ['./add-modify.component.scss']
})
export class AddModifyComponent implements OnDestroy, OnInit {
  
  resForm: FormGroup;
  cars;
  carId: string;
  resData: object;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationsService,
  ) {
    this.cars = this.route.parent.snapshot.data['cars'];
    this.resData = this.route.snapshot.data['reservation'];
    
    this.route.params.subscribe( param => {
      this.carId = param.id;
    });
  }
  
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
  
  ngOnInit() {
    this.createForm();
    if(this.carId){
      this.resForm.controls['carId'].setValue(this.resData['carId']);
      this.resForm.controls['from'].setValue(this.resData['from']);
      this.resForm.controls['to'].setValue(this.resData['to']);
      this.resForm.controls['clientName'].setValue(this.resData['clientName']);
    }
  }
  
  createForm() {
    this.resForm = this.fb.group({
      carId: ['', Validators.required],
      from: ['', [
        Validators.required
      ]
    ],
    to: ['', [
      Validators.required
    ]
  ],
  clientName: ['', Validators.required]
});
}

submitForm() {
  if(this.resForm.value && this.resForm.valid){
    if(this.carId){
      this.reservationService.updateReservation(this.carId, this.resForm.value).subscribe(this.postSubmitAction.bind(this));
    }else{
      this.reservationService.createReservation(this.resForm.value).subscribe(this.postSubmitAction.bind(this));
    }
  }
}

deleteReservation() {
  this.reservationService.deleteReservation(this.carId).subscribe(this.postSubmitAction.bind(this));
}

private postSubmitAction(res): void {
  this.router.navigate(['/reservation']);
}

}

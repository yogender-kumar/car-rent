import { TestBed, inject } from '@angular/core/testing';

import { ReservationResolver } from './reservation.resolver';

describe('ReservationResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationResolver]
    });
  });

  it('should be created', inject([ReservationResolver], (service: ReservationResolver) => {
    expect(service).toBeTruthy();
  }));
});

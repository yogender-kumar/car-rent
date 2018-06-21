import { ReservationRoutingModule } from './reservation-routing.module';

describe('ReservationRoutingModule', () => {
  let reservationRoutingModule: ReservationRoutingModule;

  beforeEach(() => {
    reservationRoutingModule = new ReservationRoutingModule();
  });

  it('should create an instance', () => {
    expect(reservationRoutingModule).toBeTruthy();
  });
});

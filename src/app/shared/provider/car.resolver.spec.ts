import { TestBed, inject } from '@angular/core/testing';

import { CarResolver } from './car.resolver';

describe('CarResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarResolver]
    });
  });

  it('should be created', inject([CarResolver], (service: CarResolver) => {
    expect(service).toBeTruthy();
  }));
});

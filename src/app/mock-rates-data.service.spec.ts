import { TestBed } from '@angular/core/testing';

import { MockRatesDataService } from './mock-rates-data.service';

describe('MockRatesDataService', () => {
  let service: MockRatesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRatesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

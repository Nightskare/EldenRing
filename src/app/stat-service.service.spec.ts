import { TestBed } from '@angular/core/testing';

import { StatServiceService } from './stat-service.service';

describe('StatServiceService', () => {
  let service: StatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

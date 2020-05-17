import { TestBed } from '@angular/core/testing';

import { InspireService } from './inspire.service';

describe('InspireService', () => {
  let service: InspireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

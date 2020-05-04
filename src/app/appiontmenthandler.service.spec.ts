import { TestBed } from '@angular/core/testing';

import { AppiontmenthandlerService } from './appiontmenthandler.service';

describe('AppiontmenthandlerService', () => {
  let service: AppiontmenthandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiontmenthandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

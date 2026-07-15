import { TestBed } from '@angular/core/testing';

import { SurfboardService } from './surfboard.service';

describe('SurfboardService', () => {
  let service: SurfboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DvdService } from './dvd.service';

describe('DvdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DvdService = TestBed.get(DvdService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HardwareState } from './hardware-state';

describe('HardwareState', () => {
  let service: HardwareState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RootServiceService } from './root-service.service';

describe('RootServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootServiceService = TestBed.get(RootServiceService);
    expect(service).toBeTruthy();
  });
});

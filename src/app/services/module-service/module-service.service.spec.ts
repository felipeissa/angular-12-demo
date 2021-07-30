import { TestBed } from '@angular/core/testing';

import { ModuleServiceService } from './module-service.service';

describe('ModuleServiceService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ModuleServiceService
    ]
  }));

  it('should call random method', () => {
    const service: ModuleServiceService = TestBed.get(ModuleServiceService);

    const spy = spyOn(Math, 'random').and.callThrough();

    service.calculate();

    expect(spy).toHaveBeenCalled();
  });
});

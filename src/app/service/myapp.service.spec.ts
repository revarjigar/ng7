import { TestBed, inject } from '@angular/core/testing';

import { MyAppService } from './myapp.service';

describe('MyAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAppService]
    });
  });

  it('should be created', inject([MyAppService], (service: MyAppService) => {
    expect(service).toBeTruthy();
  }));
});

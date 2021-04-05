import { TestBed } from '@angular/core/testing';

import { MirrarSdkService } from './mirrar-sdk.service';

describe('MirrarSdkService', () => {
  let service: MirrarSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MirrarSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

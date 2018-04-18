import { TestBed, inject } from '@angular/core/testing';

import { NicearmaLibService } from './nicearma-lib.service';

describe('NicearmaLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NicearmaLibService]
    });
  });

  it('should be created', inject([NicearmaLibService], (service: NicearmaLibService) => {
    expect(service).toBeTruthy();
  }));
});

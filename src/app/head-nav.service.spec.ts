import { TestBed } from '@angular/core/testing';

import { HeadNavService } from './head-nav.service';

describe('HeadNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadNavService = TestBed.get(HeadNavService);
    expect(service).toBeTruthy();
  });
});

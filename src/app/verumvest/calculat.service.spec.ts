import { TestBed } from '@angular/core/testing';

import { CalculatService } from './calculat.service';

describe('CalculatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatService = TestBed.get(CalculatService);
    expect(service).toBeTruthy();
  });
});

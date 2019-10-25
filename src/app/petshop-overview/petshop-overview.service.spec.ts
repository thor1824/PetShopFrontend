import { TestBed } from '@angular/core/testing';

import { PetshopOverviewService } from './petshop-overview.service';

describe('PetshopOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetshopOverviewService = TestBed.get(PetshopOverviewService);
    expect(service).toBeTruthy();
  });
});

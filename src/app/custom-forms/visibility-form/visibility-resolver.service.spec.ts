import { TestBed, inject } from '@angular/core/testing';

import { VisibilityResolverService } from '../visibility-form/visibility-resolver.service';

describe('VisibilityResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisibilityResolverService]
    });
  });

  it('should be created', inject([VisibilityResolverService], (service: VisibilityResolverService) => {
    expect(service).toBeTruthy();
  }));
});

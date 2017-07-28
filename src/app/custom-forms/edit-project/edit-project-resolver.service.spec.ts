import { TestBed, inject } from '@angular/core/testing';

import { EditProjectResolverService } from './edit-project-resolver.service';

describe('EditProjectResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditProjectResolverService]
    });
  });

  it('should be created', inject([EditProjectResolverService], (service: EditProjectResolverService) => {
    expect(service).toBeTruthy();
  }));
});

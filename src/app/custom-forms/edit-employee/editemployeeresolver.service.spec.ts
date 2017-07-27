import { TestBed, inject } from '@angular/core/testing';

import { EditemployeeresolverService } from './editemployeeresolver.service';

describe('EditemployeeresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditemployeeresolverService]
    });
  });

  it('should be created', inject([EditemployeeresolverService], (service: EditemployeeresolverService) => {
    expect(service).toBeTruthy();
  }));
});

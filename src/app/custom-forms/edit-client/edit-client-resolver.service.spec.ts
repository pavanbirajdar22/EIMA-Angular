import { TestBed, inject } from '@angular/core/testing';

import { EditClientResolverService } from './edit-client-resolver.service';

describe('EditClientResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditClientResolverService]
    });
  });

  it('should be created', inject([EditClientResolverService], (service: EditClientResolverService) => {
    expect(service).toBeTruthy();
  }));
});

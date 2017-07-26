import { TestBed, inject } from '@angular/core/testing';

import { CreateClientService } from './create-client.service';

describe('CreateClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateClientService]
    });
  });

  it('should be created', inject([CreateClientService], (service: CreateClientService) => {
    expect(service).toBeTruthy();
  }));
});

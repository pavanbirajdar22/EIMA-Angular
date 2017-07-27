import { TestBed, inject } from '@angular/core/testing';

import { EditDepartmentResolverService } from './edit-department-resolver.service';

describe('EditDepartmentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDepartmentResolverService]
    });
  });

  it('should be created', inject([EditDepartmentResolverService], (service: EditDepartmentResolverService) => {
    expect(service).toBeTruthy();
  }));
});

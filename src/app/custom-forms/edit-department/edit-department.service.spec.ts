import { TestBed, inject } from '@angular/core/testing';

import { EditDepartmentService } from './edit-department.service';

describe('EditDepartmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDepartmentService]
    });
  });

  it('should be created', inject([EditDepartmentService], (service: EditDepartmentService) => {
    expect(service).toBeTruthy();
  }));
});

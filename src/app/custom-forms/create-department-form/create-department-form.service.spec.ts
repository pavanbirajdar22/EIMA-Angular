import { TestBed, inject } from '@angular/core/testing';

import { CreateDepartmentFormService } from './create-department-form.service';

describe('CreateDepartmentFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateDepartmentFormService]
    });
  });

  it('should be created', inject([CreateDepartmentFormService], (service: CreateDepartmentFormService) => {
    expect(service).toBeTruthy();
  }));
});

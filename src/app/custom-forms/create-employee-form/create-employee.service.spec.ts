import { TestBed, inject } from '@angular/core/testing';

import { CreateEmployeeService } from './create-employee.service';

describe('CreateEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEmployeeService]
    });
  });

  it('should be created', inject([CreateEmployeeService], (service: CreateEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});

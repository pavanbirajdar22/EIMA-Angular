import { TestBed, inject } from '@angular/core/testing';

import { EditEmployeeService } from './edit-employee.service';

describe('EditEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditEmployeeService]
    });
  });

  it('should be created', inject([EditEmployeeService], (service: EditEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { EditPermissionByAdminService } from './edit-permission-by-admin.service';

describe('EditPermissionByAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPermissionByAdminService]
    });
  });

  it('should be created', inject([EditPermissionByAdminService], (service: EditPermissionByAdminService) => {
    expect(service).toBeTruthy();
  }));
});

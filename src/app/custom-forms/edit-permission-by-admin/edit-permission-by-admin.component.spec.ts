import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermissionByAdminComponent } from './edit-permission-by-admin.component';

describe('EditPermissionByAdminComponent', () => {
  let component: EditPermissionByAdminComponent;
  let fixture: ComponentFixture<EditPermissionByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPermissionByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPermissionByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeFormComponent } from './create-employee-form.component';

describe('CreateEmployeeFormComponent', () => {
  let component: CreateEmployeeFormComponent;
  let fixture: ComponentFixture<CreateEmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeesComponent } from './all-employees.component';

describe('AllEmployeesComponent', () => {
  let component: AllEmployeesComponent;
  let fixture: ComponentFixture<AllEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityFormComponent } from './visibility-form.component';

describe('VisibilityFormComponent', () => {
  let component: VisibilityFormComponent;
  let fixture: ComponentFixture<VisibilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

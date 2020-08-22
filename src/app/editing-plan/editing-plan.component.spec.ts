import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingPlanComponent } from './editing-plan.component';

describe('EditingPlanComponent', () => {
  let component: EditingPlanComponent;
  let fixture: ComponentFixture<EditingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

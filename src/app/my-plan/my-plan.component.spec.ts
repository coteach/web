import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanComponent } from './my-plan.component';

describe('MyPlanComponent', () => {
  let component: MyPlanComponent;
  let fixture: ComponentFixture<MyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

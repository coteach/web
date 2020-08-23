import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingPlanComponent } from './viewing-plan.component';

describe('ViewingPlanComponent', () => {
  let component: ViewingPlanComponent;
  let fixture: ComponentFixture<ViewingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

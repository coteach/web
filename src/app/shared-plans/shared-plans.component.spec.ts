import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPlansComponent } from './shared-plans.component';

describe('SharedPlansComponent', () => {
  let component: SharedPlansComponent;
  let fixture: ComponentFixture<SharedPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

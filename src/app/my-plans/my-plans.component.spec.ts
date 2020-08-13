import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlansComponent } from './my-plans.component';

describe('MyPlansComponent', () => {
  let component: MyPlansComponent;
  let fixture: ComponentFixture<MyPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyPlansComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

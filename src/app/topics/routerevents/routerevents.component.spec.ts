import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutereventsComponent } from './routerevents.component';

describe('RoutereventsComponent', () => {
  let component: RoutereventsComponent;
  let fixture: ComponentFixture<RoutereventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutereventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutereventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

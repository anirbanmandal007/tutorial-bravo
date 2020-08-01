import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterstatevsactivatedrouteComponent } from './routerstatevsactivatedroute.component';

describe('RouterstatevsactivatedrouteComponent', () => {
  let component: RouterstatevsactivatedrouteComponent;
  let fixture: ComponentFixture<RouterstatevsactivatedrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterstatevsactivatedrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterstatevsactivatedrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

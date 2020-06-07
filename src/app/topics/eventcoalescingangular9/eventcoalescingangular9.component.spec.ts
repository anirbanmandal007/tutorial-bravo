import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventcoalescingangular9Component } from './eventcoalescingangular9.component';

describe('Eventcoalescingangular9Component', () => {
  let component: Eventcoalescingangular9Component;
  let fixture: ComponentFixture<Eventcoalescingangular9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventcoalescingangular9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventcoalescingangular9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

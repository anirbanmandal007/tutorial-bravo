import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmethodsComponent } from './eventmethods.component';

describe('EventmethodsComponent', () => {
  let component: EventmethodsComponent;
  let fixture: ComponentFixture<EventmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbubllingcapturingComponent } from './eventbubllingcapturing.component';

describe('EventbubllingcapturingComponent', () => {
  let component: EventbubllingcapturingComponent;
  let fixture: ComponentFixture<EventbubllingcapturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbubllingcapturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbubllingcapturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverpatternComponent } from './observerpattern.component';

describe('ObserverpatternComponent', () => {
  let component: ObserverpatternComponent;
  let fixture: ComponentFixture<ObserverpatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverpatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

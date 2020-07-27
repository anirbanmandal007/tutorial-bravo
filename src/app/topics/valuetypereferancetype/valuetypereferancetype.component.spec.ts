import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuetypereferancetypeComponent } from './valuetypereferancetype.component';

describe('ValuetypereferancetypeComponent', () => {
  let component: ValuetypereferancetypeComponent;
  let fixture: ComponentFixture<ValuetypereferancetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuetypereferancetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuetypereferancetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentproblemsComponent } from './differentproblems.component';

describe('DifferentproblemsComponent', () => {
  let component: DifferentproblemsComponent;
  let fixture: ComponentFixture<DifferentproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

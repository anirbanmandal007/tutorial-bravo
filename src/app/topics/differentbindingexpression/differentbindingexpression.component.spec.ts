import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentbindingexpressionComponent } from './differentbindingexpression.component';

describe('DifferentbindingexpressionComponent', () => {
  let component: DifferentbindingexpressionComponent;
  let fixture: ComponentFixture<DifferentbindingexpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentbindingexpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentbindingexpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

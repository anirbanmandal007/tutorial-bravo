import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentmethodsComponent } from './differentmethods.component';

describe('DifferentmethodsComponent', () => {
  let component: DifferentmethodsComponent;
  let fixture: ComponentFixture<DifferentmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

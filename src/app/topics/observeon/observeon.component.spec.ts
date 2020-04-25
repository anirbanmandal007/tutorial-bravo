import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveonComponent } from './observeon.component';

describe('ObserveonComponent', () => {
  let component: ObserveonComponent;
  let fixture: ComponentFixture<ObserveonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

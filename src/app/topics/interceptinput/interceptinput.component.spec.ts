import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptinputComponent } from './interceptinput.component';

describe('InterceptinputComponent', () => {
  let component: InterceptinputComponent;
  let fixture: ComponentFixture<InterceptinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

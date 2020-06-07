import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentwaystopassinputComponent } from './differentwaystopassinput.component';

describe('DifferentwaystopassinputComponent', () => {
  let component: DifferentwaystopassinputComponent;
  let fixture: ComponentFixture<DifferentwaystopassinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentwaystopassinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentwaystopassinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

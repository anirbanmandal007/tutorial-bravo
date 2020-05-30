import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonpatternComponent } from './singletonpattern.component';

describe('SingletonpatternComponent', () => {
  let component: SingletonpatternComponent;
  let fixture: ComponentFixture<SingletonpatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletonpatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletonpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

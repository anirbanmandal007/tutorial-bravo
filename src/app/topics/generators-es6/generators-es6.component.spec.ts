import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorsES6Component } from './generators-es6.component';

describe('GeneratorsES6Component', () => {
  let component: GeneratorsES6Component;
  let fixture: ComponentFixture<GeneratorsES6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorsES6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorsES6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

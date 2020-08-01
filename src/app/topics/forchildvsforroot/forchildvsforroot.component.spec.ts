import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForchildvsforrootComponent } from './forchildvsforroot.component';

describe('ForchildvsforrootComponent', () => {
  let component: ForchildvsforrootComponent;
  let fixture: ComponentFixture<ForchildvsforrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForchildvsforrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForchildvsforrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

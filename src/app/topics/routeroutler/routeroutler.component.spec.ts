import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteroutlerComponent } from './routeroutler.component';

describe('RouteroutlerComponent', () => {
  let component: RouteroutlerComponent;
  let fixture: ComponentFixture<RouteroutlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteroutlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteroutlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

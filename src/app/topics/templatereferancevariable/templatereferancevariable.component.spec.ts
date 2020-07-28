import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferancevariableComponent } from './templatereferancevariable.component';

describe('TemplatereferancevariableComponent', () => {
  let component: TemplatereferancevariableComponent;
  let fixture: ComponentFixture<TemplatereferancevariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatereferancevariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatereferancevariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

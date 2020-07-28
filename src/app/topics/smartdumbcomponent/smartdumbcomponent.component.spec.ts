import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartdumbcomponentComponent } from './smartdumbcomponent.component';

describe('SmartdumbcomponentComponent', () => {
  let component: SmartdumbcomponentComponent;
  let fixture: ComponentFixture<SmartdumbcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartdumbcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartdumbcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

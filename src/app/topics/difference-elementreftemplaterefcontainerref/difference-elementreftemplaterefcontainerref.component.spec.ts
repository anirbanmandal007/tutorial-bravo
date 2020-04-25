import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceElementreftemplaterefcontainerrefComponent } from './difference-elementreftemplaterefcontainerref.component';

describe('DifferenceElementreftemplaterefcontainerrefComponent', () => {
  let component: DifferenceElementreftemplaterefcontainerrefComponent;
  let fixture: ComponentFixture<DifferenceElementreftemplaterefcontainerrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferenceElementreftemplaterefcontainerrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenceElementreftemplaterefcontainerrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

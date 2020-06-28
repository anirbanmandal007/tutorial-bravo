import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraymanipulationsComponent } from './arraymanipulations.component';

describe('ArraymanipulationsComponent', () => {
  let component: ArraymanipulationsComponent;
  let fixture: ComponentFixture<ArraymanipulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraymanipulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraymanipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

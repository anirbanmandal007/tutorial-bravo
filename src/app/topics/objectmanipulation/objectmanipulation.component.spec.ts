import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectmanipulationComponent } from './objectmanipulation.component';

describe('ObjectmanipulationComponent', () => {
  let component: ObjectmanipulationComponent;
  let fixture: ComponentFixture<ObjectmanipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectmanipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectmanipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

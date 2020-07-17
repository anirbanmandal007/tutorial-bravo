import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalbindingComponent } from './functionalbinding.component';

describe('FunctionalbindingComponent', () => {
  let component: FunctionalbindingComponent;
  let fixture: ComponentFixture<FunctionalbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

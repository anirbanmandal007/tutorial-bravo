import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatrxjsComponent } from './repeatrxjs.component';

describe('RepeatrxjsComponent', () => {
  let component: RepeatrxjsComponent;
  let fixture: ComponentFixture<RepeatrxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatrxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

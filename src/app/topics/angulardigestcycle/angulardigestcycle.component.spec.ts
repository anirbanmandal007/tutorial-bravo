import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardigestcycleComponent } from './angulardigestcycle.component';

describe('AngulardigestcycleComponent', () => {
  let component: AngulardigestcycleComponent;
  let fixture: ComponentFixture<AngulardigestcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardigestcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardigestcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

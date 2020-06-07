import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeinangularComponent } from './someinangular.component';

describe('SomeinangularComponent', () => {
  let component: SomeinangularComponent;
  let fixture: ComponentFixture<SomeinangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeinangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeinangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

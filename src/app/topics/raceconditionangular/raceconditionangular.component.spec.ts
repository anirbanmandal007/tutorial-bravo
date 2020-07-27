import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceconditionangularComponent } from './raceconditionangular.component';

describe('RaceconditionangularComponent', () => {
  let component: RaceconditionangularComponent;
  let fixture: ComponentFixture<RaceconditionangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceconditionangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceconditionangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

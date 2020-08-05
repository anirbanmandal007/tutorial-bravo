import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapinginangularComponent } from './bootstrapinginangular.component';

describe('BootstrapinginangularComponent', () => {
  let component: BootstrapinginangularComponent;
  let fixture: ComponentFixture<BootstrapinginangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapinginangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapinginangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

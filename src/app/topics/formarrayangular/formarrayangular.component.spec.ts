import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayangularComponent } from './formarrayangular.component';

describe('FormarrayangularComponent', () => {
  let component: FormarrayangularComponent;
  let fixture: ComponentFixture<FormarrayangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormarrayangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarrayangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

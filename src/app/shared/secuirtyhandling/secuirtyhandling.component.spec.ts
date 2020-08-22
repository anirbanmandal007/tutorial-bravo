import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuirtyhandlingComponent } from './secuirtyhandling.component';

describe('SecuirtyhandlingComponent', () => {
  let component: SecuirtyhandlingComponent;
  let fixture: ComponentFixture<SecuirtyhandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuirtyhandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuirtyhandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncerementaldomvsvirtualComponent } from './incerementaldomvsvirtual.component';

describe('IncerementaldomvsvirtualComponent', () => {
  let component: IncerementaldomvsvirtualComponent;
  let fixture: ComponentFixture<IncerementaldomvsvirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncerementaldomvsvirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncerementaldomvsvirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

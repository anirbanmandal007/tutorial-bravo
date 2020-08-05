import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransducersComponent } from './transducers.component';

describe('TransducersComponent', () => {
  let component: TransducersComponent;
  let fixture: ComponentFixture<TransducersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransducersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

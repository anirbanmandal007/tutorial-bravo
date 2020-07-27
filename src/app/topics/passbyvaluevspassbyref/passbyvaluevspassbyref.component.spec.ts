import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbyvaluevspassbyrefComponent } from './passbyvaluevspassbyref.component';

describe('PassbyvaluevspassbyrefComponent', () => {
  let component: PassbyvaluevspassbyrefComponent;
  let fixture: ComponentFixture<PassbyvaluevspassbyrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbyvaluevspassbyrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbyvaluevspassbyrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

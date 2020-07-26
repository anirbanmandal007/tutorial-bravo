import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitvedatatypeComponent } from './primitvedatatype.component';

describe('PrimitvedatatypeComponent', () => {
  let component: PrimitvedatatypeComponent;
  let fixture: ComponentFixture<PrimitvedatatypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitvedatatypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitvedatatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

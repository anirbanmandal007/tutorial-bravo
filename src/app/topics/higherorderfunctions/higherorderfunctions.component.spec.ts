import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherorderfunctionsComponent } from './higherorderfunctions.component';

describe('HigherorderfunctionsComponent', () => {
  let component: HigherorderfunctionsComponent;
  let fixture: ComponentFixture<HigherorderfunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherorderfunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherorderfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

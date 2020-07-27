import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureimpurepipeComponent } from './pureimpurepipe.component';

describe('PureimpurepipeComponent', () => {
  let component: PureimpurepipeComponent;
  let fixture: ComponentFixture<PureimpurepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureimpurepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureimpurepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

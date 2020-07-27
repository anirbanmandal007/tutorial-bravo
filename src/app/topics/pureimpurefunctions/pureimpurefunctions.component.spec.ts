import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureimpurefunctionsComponent } from './pureimpurefunctions.component';

describe('PureimpurefunctionsComponent', () => {
  let component: PureimpurefunctionsComponent;
  let fixture: ComponentFixture<PureimpurefunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureimpurefunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureimpurefunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

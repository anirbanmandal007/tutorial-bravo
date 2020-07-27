import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseallComponent } from './promiseall.component';

describe('PromiseallComponent', () => {
  let component: PromiseallComponent;
  let fixture: ComponentFixture<PromiseallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

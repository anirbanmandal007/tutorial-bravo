import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncperformaceComponent } from './asyncperformace.component';

describe('AsyncperformaceComponent', () => {
  let component: AsyncperformaceComponent;
  let fixture: ComponentFixture<AsyncperformaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncperformaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncperformaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

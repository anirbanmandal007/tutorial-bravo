import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosuresComponent } from './closures.component';

describe('ClosuresComponent', () => {
  let component: ClosuresComponent;
  let fixture: ComponentFixture<ClosuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimevsthrottletimeComponent } from './debouncetimevsthrottletime.component';

describe('DebouncetimevsthrottletimeComponent', () => {
  let component: DebouncetimevsthrottletimeComponent;
  let fixture: ComponentFixture<DebouncetimevsthrottletimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncetimevsthrottletimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncetimevsthrottletimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

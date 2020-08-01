import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JitvsaotComponent } from './jitvsaot.component';

describe('JitvsaotComponent', () => {
  let component: JitvsaotComponent;
  let fixture: ComponentFixture<JitvsaotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JitvsaotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JitvsaotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

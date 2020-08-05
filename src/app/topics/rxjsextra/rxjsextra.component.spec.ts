import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsextraComponent } from './rxjsextra.component';

describe('RxjsextraComponent', () => {
  let component: RxjsextraComponent;
  let fixture: ComponentFixture<RxjsextraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsextraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedetectionstrategyComponent } from './changedetectionstrategy.component';

describe('ChangedetectionstrategyComponent', () => {
  let component: ChangedetectionstrategyComponent;
  let fixture: ComponentFixture<ChangedetectionstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedetectionstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedetectionstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsthorrtlejoinComponent } from './rxjsthorrtlejoin.component';

describe('RxjsthorrtlejoinComponent', () => {
  let component: RxjsthorrtlejoinComponent;
  let fixture: ComponentFixture<RxjsthorrtlejoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsthorrtlejoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsthorrtlejoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencengcontentComponent } from './differencengcontent.component';

describe('DifferencengcontentComponent', () => {
  let component: DifferencengcontentComponent;
  let fixture: ComponentFixture<DifferencengcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferencengcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferencengcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

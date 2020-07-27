import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmodulesComponent } from './commonmodules.component';

describe('CommonmodulesComponent', () => {
  let component: CommonmodulesComponent;
  let fixture: ComponentFixture<CommonmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

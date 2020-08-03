import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallapplyjsComponent } from './callapplyjs.component';

describe('CallapplyjsComponent', () => {
  let component: CallapplyjsComponent;
  let fixture: ComponentFixture<CallapplyjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallapplyjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallapplyjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

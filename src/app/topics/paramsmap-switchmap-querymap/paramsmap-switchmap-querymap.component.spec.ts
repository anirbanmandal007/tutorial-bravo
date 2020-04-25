import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsmapSwitchmapQuerymapComponent } from './paramsmap-switchmap-querymap.component';

describe('ParamsmapSwitchmapQuerymapComponent', () => {
  let component: ParamsmapSwitchmapQuerymapComponent;
  let fixture: ComponentFixture<ParamsmapSwitchmapQuerymapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsmapSwitchmapQuerymapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsmapSwitchmapQuerymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

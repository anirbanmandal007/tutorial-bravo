import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferancebetweenprogramminglangComponent } from './differancebetweenprogramminglang.component';

describe('DifferancebetweenprogramminglangComponent', () => {
  let component: DifferancebetweenprogramminglangComponent;
  let fixture: ComponentFixture<DifferancebetweenprogramminglangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferancebetweenprogramminglangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferancebetweenprogramminglangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

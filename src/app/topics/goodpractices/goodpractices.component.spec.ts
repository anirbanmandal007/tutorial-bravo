import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodpracticesComponent } from './goodpractices.component';

describe('GoodpracticesComponent', () => {
  let component: GoodpracticesComponent;
  let fixture: ComponentFixture<GoodpracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodpracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodpracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

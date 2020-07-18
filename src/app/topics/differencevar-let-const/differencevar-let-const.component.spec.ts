import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencevarLetConstComponent } from './differencevar-let-const.component';

describe('DifferencevarLetConstComponent', () => {
  let component: DifferencevarLetConstComponent;
  let fixture: ComponentFixture<DifferencevarLetConstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferencevarLetConstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferencevarLetConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

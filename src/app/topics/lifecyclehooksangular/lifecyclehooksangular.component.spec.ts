import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehooksangularComponent } from './lifecyclehooksangular.component';

describe('LifecyclehooksangularComponent', () => {
  let component: LifecyclehooksangularComponent;
  let fixture: ComponentFixture<LifecyclehooksangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclehooksangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclehooksangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

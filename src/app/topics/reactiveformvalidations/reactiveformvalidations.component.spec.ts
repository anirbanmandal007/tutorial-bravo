import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformvalidationsComponent } from './reactiveformvalidations.component';

describe('ReactiveformvalidationsComponent', () => {
  let component: ReactiveformvalidationsComponent;
  let fixture: ComponentFixture<ReactiveformvalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformvalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

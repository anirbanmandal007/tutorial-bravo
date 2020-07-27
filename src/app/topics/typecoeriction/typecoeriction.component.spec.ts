import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecoerictionComponent } from './typecoeriction.component';

describe('TypecoerictionComponent', () => {
  let component: TypecoerictionComponent;
  let fixture: ComponentFixture<TypecoerictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypecoerictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecoerictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

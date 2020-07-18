import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicalvsproptypalComponent } from './classicalvsproptypal.component';

describe('ClassicalvsproptypalComponent', () => {
  let component: ClassicalvsproptypalComponent;
  let fixture: ComponentFixture<ClassicalvsproptypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicalvsproptypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicalvsproptypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericstypescriptComponent } from './genericstypescript.component';

describe('GenericstypescriptComponent', () => {
  let component: GenericstypescriptComponent;
  let fixture: ComponentFixture<GenericstypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericstypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericstypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentfactoryComponent } from './componentfactory.component';

describe('ComponentfactoryComponent', () => {
  let component: ComponentfactoryComponent;
  let fixture: ComponentFixture<ComponentfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentfactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

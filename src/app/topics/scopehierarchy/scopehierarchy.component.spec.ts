import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopehierarchyComponent } from './scopehierarchy.component';

describe('ScopehierarchyComponent', () => {
  let component: ScopehierarchyComponent;
  let fixture: ComponentFixture<ScopehierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopehierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopehierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

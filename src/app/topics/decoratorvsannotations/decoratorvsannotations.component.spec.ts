import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorvsannotationsComponent } from './decoratorvsannotations.component';

describe('DecoratorvsannotationsComponent', () => {
  let component: DecoratorvsannotationsComponent;
  let fixture: ComponentFixture<DecoratorvsannotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorvsannotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorvsannotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependecncyinjectionComponent } from './dependecncyinjection.component';

describe('DependecncyinjectionComponent', () => {
  let component: DependecncyinjectionComponent;
  let fixture: ComponentFixture<DependecncyinjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependecncyinjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependecncyinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

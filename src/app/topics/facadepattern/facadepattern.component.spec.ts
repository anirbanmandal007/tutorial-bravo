import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadepatternComponent } from './facadepattern.component';

describe('FacadepatternComponent', () => {
  let component: FacadepatternComponent;
  let fixture: ComponentFixture<FacadepatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacadepatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacadepatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

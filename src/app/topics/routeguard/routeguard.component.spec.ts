import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteguardComponent } from './routeguard.component';

describe('RouteguardComponent', () => {
  let component: RouteguardComponent;
  let fixture: ComponentFixture<RouteguardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteguardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

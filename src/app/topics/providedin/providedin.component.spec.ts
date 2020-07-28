import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedinComponent } from './providedin.component';

describe('ProvidedinComponent', () => {
  let component: ProvidedinComponent;
  let fixture: ComponentFixture<ProvidedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

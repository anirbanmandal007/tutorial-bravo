import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidprinciplesComponent } from './solidprinciples.component';

describe('SolidprinciplesComponent', () => {
  let component: SolidprinciplesComponent;
  let fixture: ComponentFixture<SolidprinciplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidprinciplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidprinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

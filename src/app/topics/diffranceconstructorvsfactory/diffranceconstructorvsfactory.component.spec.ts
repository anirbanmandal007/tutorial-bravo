import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffranceconstructorvsfactoryComponent } from './diffranceconstructorvsfactory.component';

describe('DiffranceconstructorvsfactoryComponent', () => {
  let component: DiffranceconstructorvsfactoryComponent;
  let fixture: ComponentFixture<DiffranceconstructorvsfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffranceconstructorvsfactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffranceconstructorvsfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

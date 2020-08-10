import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadmoduleComponent } from './preloadmodule.component';

describe('PreloadmoduleComponent', () => {
  let component: PreloadmoduleComponent;
  let fixture: ComponentFixture<PreloadmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

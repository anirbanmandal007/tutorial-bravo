import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepcloneComponent } from './deepclone.component';

describe('DeepcloneComponent', () => {
  let component: DeepcloneComponent;
  let fixture: ComponentFixture<DeepcloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepcloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepcloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

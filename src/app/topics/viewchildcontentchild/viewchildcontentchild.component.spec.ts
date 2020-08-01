import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildcontentchildComponent } from './viewchildcontentchild.component';

describe('ViewchildcontentchildComponent', () => {
  let component: ViewchildcontentchildComponent;
  let fixture: ComponentFixture<ViewchildcontentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildcontentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildcontentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

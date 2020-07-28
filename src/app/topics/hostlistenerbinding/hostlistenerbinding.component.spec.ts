import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerbindingComponent } from './hostlistenerbinding.component';

describe('HostlistenerbindingComponent', () => {
  let component: HostlistenerbindingComponent;
  let fixture: ComponentFixture<HostlistenerbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenerbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersiderenederingComponent } from './serversiderenedering.component';

describe('ServersiderenederingComponent', () => {
  let component: ServersiderenederingComponent;
  let fixture: ComponentFixture<ServersiderenederingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersiderenederingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersiderenederingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

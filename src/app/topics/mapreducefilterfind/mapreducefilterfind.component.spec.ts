import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapreducefilterfindComponent } from './mapreducefilterfind.component';

describe('MapreducefilterfindComponent', () => {
  let component: MapreducefilterfindComponent;
  let fixture: ComponentFixture<MapreducefilterfindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapreducefilterfindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapreducefilterfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

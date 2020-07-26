import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsgeneratirsComponent } from './collectionsgeneratirs.component';

describe('CollectionsgeneratirsComponent', () => {
  let component: CollectionsgeneratirsComponent;
  let fixture: ComponentFixture<CollectionsgeneratirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsgeneratirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsgeneratirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

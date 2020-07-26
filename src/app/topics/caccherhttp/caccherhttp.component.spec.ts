import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaccherhttpComponent } from './caccherhttp.component';

describe('CaccherhttpComponent', () => {
  let component: CaccherhttpComponent;
  let fixture: ComponentFixture<CaccherhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaccherhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaccherhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

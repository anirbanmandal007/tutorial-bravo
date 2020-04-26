import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncpipeCombinelatestComponent } from './asyncpipe-combinelatest.component';

describe('AsyncpipeCombinelatestComponent', () => {
  let component: AsyncpipeCombinelatestComponent;
  let fixture: ComponentFixture<AsyncpipeCombinelatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncpipeCombinelatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncpipeCombinelatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

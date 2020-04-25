import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorvsngoninitComponent } from './constructorvsngoninit.component';

describe('ConstructorvsngoninitComponent', () => {
  let component: ConstructorvsngoninitComponent;
  let fixture: ComponentFixture<ConstructorvsngoninitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorvsngoninitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorvsngoninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

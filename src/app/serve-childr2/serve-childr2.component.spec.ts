import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeChildr2Component } from './serve-childr2.component';

describe('ServeChildr2Component', () => {
  let component: ServeChildr2Component;
  let fixture: ComponentFixture<ServeChildr2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeChildr2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeChildr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

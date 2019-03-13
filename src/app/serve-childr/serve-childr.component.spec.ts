import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeChildrComponent } from './serve-childr.component';

describe('ServeChildrComponent', () => {
  let component: ServeChildrComponent;
  let fixture: ComponentFixture<ServeChildrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeChildrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeChildrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

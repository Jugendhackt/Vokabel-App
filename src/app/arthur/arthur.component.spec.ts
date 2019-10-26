import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthurComponent } from './arthur.component';

describe('ArthurComponent', () => {
  let component: ArthurComponent;
  let fixture: ComponentFixture<ArthurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArthurComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

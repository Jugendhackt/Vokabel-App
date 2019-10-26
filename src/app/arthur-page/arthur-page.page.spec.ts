import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthurPagePage } from './arthur-page.page';

describe('ArthurPagePage', () => {
  let component: ArthurPagePage;
  let fixture: ComponentFixture<ArthurPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArthurPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthurPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

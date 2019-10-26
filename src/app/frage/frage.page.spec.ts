import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragePage } from './frage.page';

describe('FragePage', () => {
  let component: FragePage;
  let fixture: ComponentFixture<FragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

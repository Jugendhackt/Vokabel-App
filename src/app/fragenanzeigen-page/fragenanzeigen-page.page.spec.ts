import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragenanzeigenPagePage } from './fragenanzeigen-page.page';

describe('FragenanzeigenPagePage', () => {
  let component: FragenanzeigenPagePage;
  let fixture: ComponentFixture<FragenanzeigenPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragenanzeigenPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragenanzeigenPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidPagePage } from './david-page.page';

describe('DavidPagePage', () => {
  let component: DavidPagePage;
  let fixture: ComponentFixture<DavidPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavidPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavidPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

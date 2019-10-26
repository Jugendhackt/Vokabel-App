import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JakobPagePage } from './jakob-page.page';

describe('JakobPagePage', () => {
  let component: JakobPagePage;
  let fixture: ComponentFixture<JakobPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakobPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakobPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QUIZPagePage } from './quiz-page.page';

describe('QUIZPagePage', () => {
  let component: QUIZPagePage;
  let fixture: ComponentFixture<QUIZPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QUIZPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QUIZPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

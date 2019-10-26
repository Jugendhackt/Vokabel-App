import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KasparPagePage } from './kaspar-page.page';

describe('KasparPagePage', () => {
  let component: KasparPagePage;
  let fixture: ComponentFixture<KasparPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasparPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KasparPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

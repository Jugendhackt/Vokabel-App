import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KasparComponent } from './kaspar.component';

describe('KasparComponent', () => {
  let component: KasparComponent;
  let fixture: ComponentFixture<KasparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasparComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KasparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

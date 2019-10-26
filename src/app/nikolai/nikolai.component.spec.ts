import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikolaiComponent } from './nikolai.component';

describe('NikolaiComponent', () => {
  let component: NikolaiComponent;
  let fixture: ComponentFixture<NikolaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikolaiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikolaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

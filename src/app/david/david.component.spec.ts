import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidComponent } from './david.component';

describe('DavidComponent', () => {
  let component: DavidComponent;
  let fixture: ComponentFixture<DavidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavidComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

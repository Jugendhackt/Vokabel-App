import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorenzComponent } from './lorenz.component';

describe('LorenzComponent', () => {
  let component: LorenzComponent;
  let fixture: ComponentFixture<LorenzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorenzComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LorenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

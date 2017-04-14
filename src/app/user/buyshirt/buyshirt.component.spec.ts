/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuyshirtComponent } from './buyshirt.component';

describe('BuyshirtComponent', () => {
  let component: BuyshirtComponent;
  let fixture: ComponentFixture<BuyshirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyshirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

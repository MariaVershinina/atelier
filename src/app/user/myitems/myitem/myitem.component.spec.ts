/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyitemComponent } from './myitem.component';

describe('MyitemComponent', () => {
  let component: MyitemComponent;
  let fixture: ComponentFixture<MyitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

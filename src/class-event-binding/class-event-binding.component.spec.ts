/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClassEventBindingComponent } from './class-event-binding.component';

describe('ClassEventBindingComponent', () => {
  let component: ClassEventBindingComponent;
  let fixture: ComponentFixture<ClassEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

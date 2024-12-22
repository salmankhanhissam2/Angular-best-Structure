import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInputFieldComponent } from './generic-input-field.component';

describe('GenericInputFieldComponent', () => {
  let component: GenericInputFieldComponent;
  let fixture: ComponentFixture<GenericInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericInputFieldComponent]
    });
    fixture = TestBed.createComponent(GenericInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

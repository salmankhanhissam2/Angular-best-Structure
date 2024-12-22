import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-input-field',
  templateUrl: './generic-input-field.component.html',
  styleUrls: ['./generic-input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericInputFieldComponent),
      multi: true
    }
  ]
})
export class GenericInputFieldComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() minlength: number | null = null;

  control: FormControl = new FormControl();

  onTouched = () => {};

  ngOnInit(): void {
    const validators = [];
    if (this.required) validators.push(Validators.required);
    if (this.type === 'email') validators.push(Validators.email);
    if (this.minlength) validators.push(Validators.minLength(this.minlength));

    this.control = new FormControl('', validators); // Initialize FormControl with validators
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}

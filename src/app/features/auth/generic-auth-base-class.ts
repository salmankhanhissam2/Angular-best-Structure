import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export abstract class AuthBaseComponent {
  authForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Common method to handle form submission
  onSubmit() {
    if (this.authForm.valid) {
      console.log('Form Submitted', this.authForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  patchFormValues(values: Partial<{ username: string; email: string; password: string; confirmPassword: string }>): void {
    this.authForm.patchValue(values);
  }
}

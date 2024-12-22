import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthBaseComponent } from '../generic-auth-base-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AuthBaseComponent {
  loginForm = this.authForm; // Alias `authForm` as `loginForm`

  constructor(protected override fb: FormBuilder) {
    super(fb); // Call the constructor of AuthBaseComponent
  }
  ngOnInit(): void {
    // Simulating fetching user data from an API
    const userData = {
      email: 'salman@example.com',
    };

    // Patch the form with the user data
    this.patchFormValues(userData);
  }
}

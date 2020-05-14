import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="example-container">

      <mat-form-field appearance="fill">
        <mat-label>Enter your password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'" />
        <button
          mat-icon-button
          matSuffix
          (click)="hide = !hide"
          [attr.aria-label]="'Hide password'"
          [attr.aria-pressed]="hide"
        >
          <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
        </button>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  hide = false;
  constructor(private formBuilder: FormBuilder) {
    this.email = this.formBuilder.control('', [Validators.email]);
  }

  getErrorMessage() {
    return '';
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  template: `
    <p>Please login.</p>
    <button (click)="login()">Login with Google</button>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public firebaseAuth: AngularFireAuth) {}

  login() {
    this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item href="/journal">Journal</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>{{ title }}</span>

          <!-- This fills the remaining space of the current row -->
          <span class="example-fill-remaining-space"></span>

          <div *ngIf="auth.user | async as user">
            <span>Hello {{ user.displayName }}!</span>
            <button mat-button mat-icon-button [matMenuTriggerFor]="menu">
              <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
              <button (click)="logout()" mat-menu-item>Logout</button>
            </mat-menu>
          </div>
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Just play';
  items: any;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AngularFireAuth,
    private router: Router
  ) {}

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['/login']));
  }
}

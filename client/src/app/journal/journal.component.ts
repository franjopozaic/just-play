import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { JournalService } from './journal.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-journal',
  template: `
    <mat-accordion>
      <mat-expansion-panel *ngFor="let item of items | async">
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{item.date.toDate() | date}}
          </mat-panel-title>
          <mat-panel-description>
            <mat-chip-list>
              <mat-chip *ngFor="let tag of item.tags">{{tag}}</mat-chip>
            </mat-chip-list>
          </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
          <mat-label>First name</mat-label>
          <input matInput />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Age</mat-label>
          <input matInput type="number" min="1" />
        </mat-form-field>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  items: Observable<any>;
  panelOpenState = false;

  constructor(private service: JournalService) {
    this.items = this.service.getItems().pipe(tap(console.log));
  }

  ngOnInit(): void {}
}

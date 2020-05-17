import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { JournalService } from './journal.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-journal',
  template: `
    <section>
      <div class="example-button-row">
        <button (click)="onNewEntry()" mat-raised-button>New entry</button>
      </div>
    </section>
    <mat-divider></mat-divider>
    <app-journal-input *ngIf="showInput"></app-journal-input>
    <mat-accordion [multi]="true">
      <mat-expansion-panel [expanded]="true" *ngFor="let item of items | async">
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{ item.date.toDate() | date }}
          </mat-panel-title>
          <mat-panel-description>
            <mat-chip-list>
              <mat-chip *ngFor="let tag of item.tags">{{ tag }}</mat-chip>
            </mat-chip-list>
          </mat-panel-description>
        </mat-expansion-panel-header>

        <p>
          {{ item.note }}
        </p>
        <mat-card *ngFor="let song of item.songs" class="example-card">
          <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>{{ song.artist }}</mat-card-title>
            <mat-card-subtitle>{{ song.title }}</mat-card-subtitle>
          </mat-card-header>
          <youtube-player videoId="{{ song.videoUrl }}"></youtube-player>
          <mat-card-content>
            <mat-chip-list>
              <mat-chip *ngFor="let tag of song.tags">{{ tag }}</mat-chip>
            </mat-chip-list>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>WORKING ON IT</button>
          </mat-card-actions>
        </mat-card>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  items: Observable<any>;
  showInput = false;
  constructor(private service: JournalService) {}

  ngOnInit(): void {
    this.items = this.service.getItems();
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  onNewEntry() {
    this.showInput = !this.showInput;
  }
}

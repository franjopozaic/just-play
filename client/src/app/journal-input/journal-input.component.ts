import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SongInputComponent } from '../song-input/song-input.component';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { JournalService } from '../journal/journal.service';

@Component({
  selector: 'app-journal-input',
  template: `
    <mat-expansion-panel [expanded]="true" [hideToggle]="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          New journal entry
        </mat-panel-title>
      </mat-expansion-panel-header>

      <form class="example-form" [formGroup]="form">
        <mat-form-field class="example-full-width">
          <mat-label>Tags</mat-label>
          <input
            matInput
            formControlName="tags"
            placeholder="Ex. scales, triads"
            value=""
          />
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <mat-label>Note</mat-label>
          <textarea matInput formControlName="note" t></textarea>
        </mat-form-field>
        <button (click)="onNewSong()" mat-raised-button>Add song</button>
        <app-song-input
          *ngFor="let form of songForms"
          [form]="form"
        ></app-song-input>
      </form>
      <button (click)="save()" mat-raised-button>Save</button>
    </mat-expansion-panel>
  `,
  styleUrls: ['./journal-input.component.scss'],
})
export class JournalInputComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: JournalService) {
    this.form = this.fb.group({
      tags: this.fb.control(''),
      note: this.fb.control(''),
      songs: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  onNewSong() {
    (this.form.get('songs') as FormArray).push(this.getSongForm());
  }

  save() {
    this.service.addItem(this.form.value);
  }

  getSongForm() {
    return this.fb.group({
      artist: this.fb.control(''),
      title: this.fb.control(''),
      videoUrl: this.fb.control(''),
      tags: this.fb.control(''),
    });
  }

  get songForms() {
    return (this.form.get('songs') as FormArray).controls;
  }
}

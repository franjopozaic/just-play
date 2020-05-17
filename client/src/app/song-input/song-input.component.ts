import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-song-input',
  template: `
    <form [formGroup]="form">
      <mat-card>
        <mat-form-field class="example-full-width">
          <mat-label>Artist</mat-label>
          <input matInput formControlName="artist" value="" />
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <mat-label>Title</mat-label>
          <input matInput formControlName="title" value="" />
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <mat-label>Video URL</mat-label>
          <input matInput formControlName="videoUrl" value="" />
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <mat-label>Tags</mat-label>
          <input
            matInput
            formControlName="tags"
            placeholder="Ex. scales, triads"
            value=""
          />
        </mat-form-field>
      </mat-card>
    </form>
  `,
  styleUrls: ['./song-input.component.scss'],
})
export class SongInputComponent {
  @Input()
  form: FormGroup;
}

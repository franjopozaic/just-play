import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-journal',
  template: `
    <p>
      journal works!
    </p>
    <ul>
      <li class="text" *ngFor="let item of items | async">
        {{ item.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  items: Observable<any>;

  constructor(private firestore: AngularFirestore) {
    this.items = this.firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {}
}

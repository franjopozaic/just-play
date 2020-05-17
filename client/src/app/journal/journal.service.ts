import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, tap } from 'rxjs/operators';
import * as firebase from 'firebase';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  getItems() {
    return this.auth.user.pipe(
      switchMap((user) =>
        this.firestore
          .collection('journal', (ref) =>
            ref.where('userId', '==', user.uid).orderBy('date', 'desc')
          )
          .valueChanges()
      )
    );
  }

  addItem(item: any) {
    item = updateTags(item);
    this.auth.user
      .pipe(
        switchMap((user) =>
          this.firestore.collection('journal').add({
            ...item,
            userId: user.uid,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
          })
        )
      )
      .subscribe(console.log);
  }
}

const splitTags = R.pipe(R.trim, R.split(' '));
const updateTagProp = R.over(R.lensProp('tags'), splitTags);
const updateTags = R.pipe(
  updateTagProp,
  R.over(R.lensProp('songs'), R.map(updateTagProp))
);

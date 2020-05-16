import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, tap } from 'rxjs/operators';

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
          .collection('journal', (ref) => ref.where('userId', '==', user.uid))
          .valueChanges()
      )
    );
  }
}

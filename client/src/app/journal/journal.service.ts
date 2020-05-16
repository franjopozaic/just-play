import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private firestore: AngularFirestore) { }

  getItems() {
    return this.firestore.collection('journal').valueChanges();
  }
}

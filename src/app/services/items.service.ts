import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(
    public afs: AngularFirestore,

  ) {
    this.items = this.afs.collection('members').valueChanges();
  }

  getItems() {
    return this.items;
  }
}

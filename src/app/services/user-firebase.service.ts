import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  create(data): Promise<any> {
    return new Promise<any>(
      (resolve, rejects) => {
        this.firestore.collection('user').add(data).then(res => {
        }, err => rejects(err));
      }
    );
  }


  getUser(name: string){
    return this.firestore.collection('user', ref => ref.where('name', '==', name)).snapshotChanges();
  }
}

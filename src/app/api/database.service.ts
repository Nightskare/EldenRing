import { Injectable, inject } from '@angular/core';
import { Firestore, deleteDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { merge, Observable } from 'rxjs';
import { Stuff } from '../interface/stuff';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  firestore: Firestore = inject(Firestore);

  constructor() {
  }

  public createOrChangeStuff(stuff : Stuff){
    const docRef = doc(this.firestore, `stuff/${stuff.stuffName}`);
      return setDoc(docRef, stuff, {merge: true});
  }

  public getStuff(stuff : Stuff) : Stuff{
    const docRef = doc(this.firestore, 'stuff', stuff.stuffName);
    getDoc(docRef).then((docSnap)=>{
      if(docSnap.exists()){
        return <Stuff>docSnap.data();
      }
      return stuff;
    })
    return stuff;
  }

  public removeStuff(stuff : Stuff){
    const docRef = doc(this.firestore, 'stuff', stuff.stuffName);
    deleteDoc(docRef);
  }
}

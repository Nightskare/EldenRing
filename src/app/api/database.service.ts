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

  public async getStuff(stuffName : string) : Promise<Stuff>{
    var stuff : Stuff = {
      userId: "",
      stuffName: stuffName,
      classId: "",
      helmetId: "",
      chestplateId: "",
      gantletId: "",
      bootsId: "",
      talismansIds: [],
      weaponsId: []
    };
    const docRef = doc(this.firestore, 'stuff', stuff.stuffName);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      return <Stuff>docSnap.data();
    } else{
      return stuff;
    }

  }

  public removeStuff(stuff : Stuff){
    const docRef = doc(this.firestore, 'stuff', stuff.stuffName);
    deleteDoc(docRef);
  }
}

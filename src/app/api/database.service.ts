import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, getDocs, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stuff } from '../interface/stuff';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  firestore: Firestore = inject(Firestore);

  constructor() {
  }

  public async createStuff(stuff : Stuff){
    const docRef = await addDoc(collection(this.firestore, 'EldenGuide'), {
      userId : stuff.userId,
      stuffName : stuff.stuffName,
      classId : stuff.classId,
      helmetId : stuff.helmetId,
      chestplateId : stuff.chestplateId,
      gantletId : stuff.gantletId,
      bootsId : stuff.bootsId,
      talismansIds : stuff.talismansIds,
      weaponsId : stuff.weaponsId
    })
  }

  public async getStuffs(){
    return((await getDocs(query(collection(this.firestore, 'EldenGuide')))).docs.map((stuff) => stuff.data()));
  }
}

import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, getDocs, query, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stuff } from '../interface/stuff';

@Injectable({
  providedIn: 'root'
})

class StuffFormat{
  constructor(readonly userId : string, readonly stuffName : string, readonly classId : string, readonly helmetId : string, readonly chestplateId : string, readonly gantletId : string, readonly bootsId : string, readonly talismansIds : Array<string>, readonly weaponsId : Array<string>){

  }
}

export class DatabaseService {
  firestore: Firestore = inject(Firestore);
  converter = {
    toFirestore(stuff : Stuff){
      return {
        userId : stuff.userId,
        stuffName : stuff.stuffName,
        classId : stuff.classId,
        helmetId : stuff.helmetId,
        chestplateId : stuff.chestplateId,
        gantletId : stuff.gantletId,
        bootsId : stuff.bootsId,
        talismansIds : stuff.talismansIds,
        weaponsId : stuff.weaponsId
      }
    },
    fromFirestore(snapshot : QueryDocumentSnapshot){
      const data = snapshot.data()
      return new StuffFormat(data['userId'], data['stuffName'], data['classId'], data['helmetId'], data['chestplateId'], data['gantletId'], data['bootsId'], data['talismansIds'], data['weaponsId']);
    }
  }

  constructor() {
  }

  public async createStuff(stuff : Stuff){
    const docRef = await addDoc(collection(this.firestore, 'EldenGuide').withConverter(this.converter),stuff);
  }

  /*public async getStuffs(){
    return((await getDocs(query(collection(this.firestore, 'EldenGuide')))).docs.map((stuff) => stuff.data()));
  }*/
  public async getStuffs() : Promise<Stuff[]>{
    return (await getDocs(query(collection(this.firestore, 'EldenGuide').withConverter(this.converter)))).docs.map((stuff) => stuff.data());
  }
}

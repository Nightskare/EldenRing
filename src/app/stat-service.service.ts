import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatServiceService {
  level: number;
  vigor: number;
  vigorUpdate: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  esprit: number;
  endurance: number;
  force: number;
  dexterite: number;
  intelligence: number;
  foi: number;
  esoterisme: number;
  constructor() {
    this.level=0;
    this.vigor=0;
    this.esprit=0;
    this.endurance=0;
    this.force=0;
    this.dexterite=0;
    this.intelligence=0;
    this.foi=0;
    this.esoterisme=0;
   }
  vigorUpdate$: Observable<number> = this.vigorUpdate.asObservable();
  setLevel(data:number){
    this.level=data
  }
  getLevel(){
    return this.level;
  }
  setVigor(data:number){
    this.vigor=data
  }
  getVigor(){
    return this.vigor;
  }
  setVigorUpdate(data:number){
    this.vigorUpdate.next(data)
  }
  getVigorUpdate(){
    return this.vigorUpdate;
  }
  
  setEndurance(data:number){
    this.level=data
  }
  getEndurance(){
    return this.level;
  }
  setForce(data:number){
    this.level=data
  }
  getForce(){
    return this.level;
  }
  setDexterite(data:number){
    this.level=data
  }
  getDexterite(){
    return this.level;
  }
  setIntelligence(data:number){
    this.level=data
  }
  getIntelligence(){
    return this.level;
  }
  setFoi(data:number){
    this.level=data
  }
  getFoi(){
    return this.level;
  }
  setEsoterisme(data:number){
    this.level=data
  }
  getEsoterisme(){
    return this.level;
  }
}

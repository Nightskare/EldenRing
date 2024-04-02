import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatServiceService {
  // init variables
  level: number;
  vigor: number;
  private vigorUpdate= new BehaviorSubject<number>(0);
  esprit: number;
  private espritUpdate= new BehaviorSubject<number>(0);
  endurance: number;
  private enduranceUpdate= new BehaviorSubject<number>(0);
  force: number;
  private forceUpdate= new BehaviorSubject<number>(0);
  dexterite: number;
  private dexteriteUpdate= new BehaviorSubject<number>(0);
  intelligence: number;
  private intelligenceUpdate= new BehaviorSubject<number>(0);
  foi: number;
  private foiUpdate= new BehaviorSubject<number>(0);
  esoterisme: number;
  private esoterismeUpdate= new BehaviorSubject<number>(0);
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
   //Observable
  vigorUpdate$: Observable<number> = this.vigorUpdate.asObservable();
  espritUpdate$: Observable<number> = this.espritUpdate.asObservable();
  enduranceUpdate$: Observable<number> = this.enduranceUpdate.asObservable();
  forceUpdate$: Observable<number> = this.forceUpdate.asObservable();
  dexteriteUpdate$: Observable<number> = this.dexteriteUpdate.asObservable();
  intelligenceUpdate$: Observable<number> = this.intelligenceUpdate.asObservable();
  foiUpdate$: Observable<number> = this.foiUpdate.asObservable();
  esoterismeUpdate$: Observable<number> = this.esoterismeUpdate.asObservable();
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
  setVigorUpdate(vigorUpdate:number){
    this.vigorUpdate.next(vigorUpdate)
  }
  getVigorUpdate(){
    return this.vigorUpdate;
  }
  setEsprit(data:number){
    this.esprit=data
  }
  getEsprit(){
    return this.esprit;
  }
  setEspritUpdate(espritUpdate:number){
    this.espritUpdate.next(espritUpdate)
  }
  getespritUpdate(){
    return this.espritUpdate;
  }
  setEndurance(data:number){
    this.endurance=data
  }
  getEndurance(){
    return this.endurance;
  }
  setEnduranceUpdate(enduranceUpdate:number){
    this.enduranceUpdate.next(enduranceUpdate)
  }
  getEnduranceUpdate(){
    return this.enduranceUpdate;
  }
  
  setForce(data:number){
    this.level=data
  }
  getForce(){
    return this.level;
  }
  setForceUpdate(forceUpdate:number){
    this.forceUpdate.next(forceUpdate)
  }
  getforceUpdate(){
    return this.forceUpdate;
  }
  setDexterite(data:number){
    this.level=data
  }
  getDexterite(){
    return this.level;
  }
  setDexteriteUpdate(dexteriteUpdate:number){
    this.dexteriteUpdate.next(dexteriteUpdate)
  }
  getDexteriteUpdate(){
    return this.dexteriteUpdate;
  }
  setIntelligence(data:number){
    this.intelligence=data
  }
  getIntelligence(){
    return this.intelligence;
  }
  setIntelligenceUpdate(intelligenceUpdate:number){
    this.intelligenceUpdate.next(intelligenceUpdate)
  }
  getIntelligenceUpdate(){
    return this.intelligenceUpdate;
  }
  setFoi(data:number){
    this.foi=data
  }
  getFoi(){
    return this.foi;
  }
  setFoiUpdate(foiUpdate:number){
    this.foiUpdate.next(foiUpdate)
  }
  getFoiUpdate(){
    return this.foiUpdate;
  }
  setEsoterisme(data:number){
    this.esoterisme=data
  }
  getEsoterisme(){
    return this.esoterisme;
  }
  setEsoterismeUpdate(esoterismeUpdate:number){
    this.esoterismeUpdate.next(esoterismeUpdate)
  }
  getEsoterismeUpdate(){
    return this.esoterismeUpdate;
  }
}

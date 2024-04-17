import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatServiceService {
  // init variables
  private level= new BehaviorSubject<number>(0);
  private levelUpdate= new BehaviorSubject<number>(0);
  private vigor= new BehaviorSubject<number>(0);
  private vigorUpdate= new BehaviorSubject<number>(0);
  private esprit= new BehaviorSubject<number>(0);
  private espritUpdate= new BehaviorSubject<number>(0);
  private endurance= new BehaviorSubject<number>(0);
  private enduranceUpdate= new BehaviorSubject<number>(0);
  private force= new BehaviorSubject<number>(0);
  private forceUpdate= new BehaviorSubject<number>(0);
  private dexterite= new BehaviorSubject<number>(0);
  private dexteriteUpdate= new BehaviorSubject<number>(0);
  private intelligence= new BehaviorSubject<number>(0);
  private intelligenceUpdate= new BehaviorSubject<number>(0);
  private foi= new BehaviorSubject<number>(0);
  private foiUpdate= new BehaviorSubject<number>(0);
  private esoterisme= new BehaviorSubject<number>(0);
  private esoterismeUpdate= new BehaviorSubject<number>(0);
  constructor() {
  }
   //Observable
  level$: Observable<number> = this.level.asObservable();
  vigor$: Observable<number> = this.vigor.asObservable();
  esprit$: Observable<number> = this.esprit.asObservable();
  endurance$: Observable<number> = this.endurance.asObservable();
  force$: Observable<number> = this.force.asObservable();
  dexterite$: Observable<number> = this.dexterite.asObservable();
  intelligence$: Observable<number> = this.intelligence.asObservable();
  foi$: Observable<number> = this.foi.asObservable();
  esoterisme$: Observable<number> = this.esoterisme.asObservable();
  levelUpdate$: Observable<number> = this.levelUpdate.asObservable();
  vigorUpdate$: Observable<number> = this.vigorUpdate.asObservable();
  espritUpdate$: Observable<number> = this.espritUpdate.asObservable();
  enduranceUpdate$: Observable<number> = this.enduranceUpdate.asObservable();
  forceUpdate$: Observable<number> = this.forceUpdate.asObservable();
  dexteriteUpdate$: Observable<number> = this.dexteriteUpdate.asObservable();
  intelligenceUpdate$: Observable<number> = this.intelligenceUpdate.asObservable();
  foiUpdate$: Observable<number> = this.foiUpdate.asObservable();
  esoterismeUpdate$: Observable<number> = this.esoterismeUpdate.asObservable();
  setLevel(level:number){
    this.level.next(level)
  }
  getLevel(){
    return this.level;
  }
  setLevelUpdate(levelUpdate:number){
    this.levelUpdate.next(levelUpdate)
  }
  getLevelUpdate(){
    return this.levelUpdate;
  }
  setVigor(vigor:number){
    this.vigor.next(vigor)
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
  setEsprit(esprit:number){
    this.esprit.next(esprit)
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
  setEndurance(endurance:number){
    this.endurance.next(endurance)
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
  
  setForce(force:number){
    this.force.next(force)
  }
  getForce(){
    return this.force;
  }
  setForceUpdate(forceUpdate:number){
    this.forceUpdate.next(forceUpdate)
  }
  getforceUpdate(){
    return this.forceUpdate;
  }
  setDexterite(dexterite:number){
     this.dexterite.next(dexterite)
  }
  getDexterite(){
    return this.dexterite;
  }
  setDexteriteUpdate(dexteriteUpdate:number){
    this.dexteriteUpdate.next(dexteriteUpdate)
  }
  getDexteriteUpdate(){
    return this.dexteriteUpdate;
  }
  setIntelligence(intelligence:number){
    this.intelligence.next(intelligence)
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
  setFoi(foi:number){
    this.foi.next(foi)
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
  setEsoterisme(esoterisme:number){
    this.esoterisme.next(esoterisme)
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

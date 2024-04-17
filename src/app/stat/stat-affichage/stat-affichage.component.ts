import { Component } from '@angular/core';
import { StatServiceService } from '../../stat-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-stat-affichage',
  templateUrl: './stat-affichage.component.html',
  styleUrl: './stat-affichage.component.css'
})
export class StatAffichageComponent {
  vigor:number;
  vigorUpdate: number;
  //totalvigor:number;
  //totalvigorupdate:number;
  esprit:number;
  espritUpdate: number;
  //totalesprit:number;
  endurance:number;
  enduranceUpdate: number;
  //totalendurance:number;
  force:number;
  forceUpdate: number;
  //totalforce:number;
  dexterite:number;
  dexteriteUpdate: number;
  //totaldexterite:number;
  intelligence:number;
  intelligenceUpdate: number;
  //totalintelligence:number;
  foi:number;
  foiUpdate: number;
  //totalfoi:number;
  esoterisme:number;
  esoterismeUpdate: number;
  //totalesoterisme:number;
  constructor(private service:StatServiceService){
    this.vigor=0;
    this.vigorUpdate=0;
    //this.totalvigor=0;
    //this.totalvigorupdate=0;
    this.esprit=0;
    this.espritUpdate=0;
    //this.totalesprit=0;
    this.endurance=0;
    this.enduranceUpdate=0;
    //this.totalendurance=0;
    this.force=0;
    this.forceUpdate=0;
    //this.totalforce=0;
    this.dexterite=0;
    this.dexteriteUpdate=0;
    //this.totaldexterite=0;
    this.intelligence=0;
    this.intelligenceUpdate=0;
    //this.totalintelligence=0;
    this.foi=0;
    this.foiUpdate=0;
    //this.totalfoi=0;
    this.esoterisme=0;
    this.esoterismeUpdate=0;
    //this.totalesoterisme=0;
  }
  ngOnInit(): void{
    
    this.service.vigor$.subscribe(vigor=>this.vigor=vigor)
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate)
    this.service.esprit$.subscribe(esprit=>this.esprit=esprit)
    this.service.espritUpdate$.subscribe(espritUpdate=>this.espritUpdate=espritUpdate)
    this.service.endurance$.subscribe(endurance=>this.endurance=endurance)
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)
    this.service.force$.subscribe(force=>this.force=force)
    this.service.forceUpdate$.subscribe(forceUpdate=>this.forceUpdate=forceUpdate)
    this.service.dexterite$.subscribe(dexterite=>this.dexterite=dexterite)
    this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.dexteriteUpdate=dexteriteUpdate)
    this.service.intelligence$.subscribe(intelligence=>this.intelligence=intelligence)
    this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.intelligenceUpdate=intelligenceUpdate)
    this.service.foi$.subscribe(foi=>this.foi=foi)
    this.service.foiUpdate$.subscribe(foiUpdate=>this.foiUpdate=foiUpdate)
    this.service.esoterisme$.subscribe(esoterisme=>this.esoterisme=esoterisme)
    this.service.esoterismeUpdate$.subscribe(esoterismeUpdate=>this.esoterismeUpdate=esoterismeUpdate)


    //Total HP
    /* vrai calcul des pv
    if(this.vigor <= 25 && this.vigor >=0){
      this.totalvigor=300 + 500*(((this.vigor- 1) / 24)^1.5)
    }
    else if(this.vigor <= 40 && this.vigor >26){
      this.totalvigor=800 + 650*(((this.vigor - 25) / 15)^1.1)
    }
    else if(this.vigor <= 60 && this.vigor >40){
      this.totalvigor=1450 + 450*(1 - (1 - ((this.vigor - 40) / 20))^1.2)
    }
    else if(this.vigor <= 99 && this.vigor >60){
      this.totalvigor=1900 + 200*(1 - (1 - ((this.vigor- 60) / 39))^1.2)
    }
    else{
      this.totalvigor=0;
    }
    */

  }
}

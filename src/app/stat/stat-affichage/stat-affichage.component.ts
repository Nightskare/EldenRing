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
  totalvigor:number;
  esprit:number;
  espritUpdate: number;
  totalesprit:number;
  endurance:number;
  enduranceUpdate: number;
  totalendurance:number;
  force:number;
  forceUpdate: number;
  totalforce:number;
  dexterite:number;
  dexteriteUpdate: number;
  totaldexterite:number;
  intelligence:number;
  intelligenceUpdate: number;
  totalintelligence:number;
  foi:number;
  foiUpdate: number;
  totalfoi:number;
  esoterisme:number;
  esoterismeUpdate: number;
  totalesoterisme:number;
  constructor(private service:StatServiceService){
    this.vigor=0;
    this.vigorUpdate=0;
    this.totalvigor=0;
    this.esprit=0;
    this.espritUpdate=0;
    this.totalesprit=0;
    this.endurance=0;
    this.enduranceUpdate=0;
    this.totalendurance=0;
    this.force=0;
    this.forceUpdate=0;
    this.totalforce=0;
    this.dexterite=0;
    this.dexteriteUpdate=0;
    this.totaldexterite=0;
    this.intelligence=0;
    this.intelligenceUpdate=0;
    this.totalintelligence=0;
    this.foi=0;
    this.foiUpdate=0;
    this.totalfoi=0;
    this.esoterisme=0;
    this.esoterismeUpdate=0;
    this.totalesoterisme=0;
  }
  ngOnInit(): void{
    
    this.vigor= Number(this.service.getVigor());
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate)
    this.esprit= Number(this.service.getEsprit());
    this.service.espritUpdate$.subscribe(espritUpdate=>this.espritUpdate=espritUpdate)
    this.endurance= Number(this.service.getEndurance());
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)
    this.force= Number(this.service.getForce());
    this.service.forceUpdate$.subscribe(forceUpdate=>this.forceUpdate=forceUpdate)
    this.dexterite= Number(this.service.getDexterite());
    this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.dexteriteUpdate=dexteriteUpdate)
    this.intelligence= Number(this.service.getIntelligence());
    this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.intelligenceUpdate=intelligenceUpdate)
    this.foi= Number(this.service.getFoi());
    this.service.foiUpdate$.subscribe(foiUpdate=>this.foiUpdate=foiUpdate)
    this.esoterisme= Number(this.service.getEsoterisme());
    this.service.esoterismeUpdate$.subscribe(esoterismeUpdate=>this.esoterismeUpdate=esoterismeUpdate)



    if(this.vigor < 25 && this.vigor >=0){

    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StatServiceService } from '../../stat-service.service';
import { ApiService } from '../../api/api.service';
import { Classes } from '../../interface/classes';
import { Stuff } from '../../interface/stuff';
@Component({
  selector: 'app-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrl: './stat-form.component.css'
})
export class StatFormComponent {
  stuff:Stuff;
  constructor(private service: StatServiceService , public apiservice: ApiService){
    this.stuff={
      userId: "",
      stuffName: "",
      classId: "",
      helmetId: "",
      chestplateId: "",
      gantletId: "",
      bootsId: "",
      talismansIds: [],
      weaponsId: [],
      vigor : 0,
      esprit : 0,
      endurance : 0,
      force : 0,
      dexterite : 0,
      intelligence : 0,
      foi : 0,
      esoterisme : 0,
      level : 1
  
    };
  }
  
  level = 0 ;
  levelUpdate= 0;
  vigor = 0 ;
  vigorUpdateForm=new FormControl() ;
  vigorUpdate=Number(this.vigorUpdateForm);
  esprit= 0;
  espritUpdateForm=new FormControl() ;
  espritUpdate=Number(this.espritUpdateForm);
  endurance = 0;
  enduranceUpdateForm=new FormControl() ;
  enduranceUpdate=Number(this.enduranceUpdateForm);
  force= 0;
  forceUpdateForm=new FormControl() ;
  forceUpdate=Number(this.forceUpdateForm);
  dexterite =0;
  dexteriteUpdateForm=new FormControl() ;
  dexteriteUpdate=Number(this.dexteriteUpdateForm);
  intelligence = 0;
  intelligenceUpdateForm=new FormControl() ;
  intelligenceUpdate=Number(this.intelligenceUpdateForm);
  foi= 0;
  foiUpdateForm=new FormControl() ;
  foiUpdate=Number(this.foiUpdateForm);
  esoterisme = 0;
  esoterismeUpdateForm=new FormControl() ;
  esoterismeUpdate=Number(this.esoterismeUpdateForm);
 ngOnInit(){
    this.service.stuff$.subscribe(stuff=>{this.stuff=stuff;this.mettreStatAJour()});
    this.apiservice.getClasses("17f69d4ac46l0i32hju3peo5nijzbj").subscribe(a=>{
      // Set mes valeurs par défaut par rapport à celles de l'API
      this.vigor+=parseInt(a.data.stats['vigor']);
      this.esprit+=parseInt(a.data.stats['mind']);
      this.endurance+=parseInt(a.data.stats['endurance']);
      this.force+=parseInt(a.data.stats['strength']);
      this.dexterite+=parseInt(a.data.stats['dexterity']);
      this.intelligence+=parseInt(a.data.stats['intelligence']);
      this.foi+=parseInt(a.data.stats['faith']);
      this.esoterisme+=parseInt(a.data.stats['arcane']);
      this.vigorUpdate=this.vigor;

      //Mise a jour de la valeur du form par défault
      this.level= this.vigor+this.esprit+this.endurance+this.force+this.dexterite+this.intelligence+this.foi+this.esoterisme;
      this.vigorUpdateForm.setValue(this.vigor);
      this.espritUpdateForm.setValue(this.esprit);
      this.enduranceUpdateForm.setValue(this.endurance);
      this.forceUpdateForm.setValue(this.force);
      this.dexteriteUpdateForm.setValue(this.dexterite);
      this.intelligenceUpdateForm.setValue(this.intelligence);
      this.foiUpdateForm.setValue(this.foi);
      this.esoterismeUpdateForm.setValue(this.esoterisme);



      //Valeurs donnée par défault dans dans le service
      this.service.setVigor(this.vigor);
      this.service.setVigorUpdate(this.vigor);
      this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate);
      this.service.setEsprit(Number(this.esprit));
      this.service.setEspritUpdate(this.esprit);
      this.service.espritUpdate$.subscribe(espritUpdate=>this.espritUpdate=espritUpdate);
      this.service.setEndurance(Number(this.endurance));
      this.service.setEnduranceUpdate(this.endurance);
      this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)
      this.service.setForce(Number(this.force));
      this.service.setForceUpdate(this.force);
      this.service.forceUpdate$.subscribe(forceUpdate=>this.forceUpdate=forceUpdate);
      this.service.setDexterite(Number(this.dexterite));
      this.service.setDexteriteUpdate(this.dexterite);
      this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.dexteriteUpdate=dexteriteUpdate)
      this.service.setIntelligence(Number(this.intelligence));
      this.service.setIntelligenceUpdate(this.intelligence);
      this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.intelligenceUpdate=intelligenceUpdate)
      this.service.setFoi(Number(this.foi));
      this.service.setFoiUpdate(this.foi);
      this.service.foiUpdate$.subscribe(foiUpdate=>this.foiUpdate=foiUpdate)
      this.service.setEsoterisme(Number(this.endurance));
      this.service.setEsoterismeUpdate(this.esoterisme);
      this.service.esoterismeUpdate$.subscribe(esoterismeUpdate=>this.esoterismeUpdate=esoterismeUpdate)
      this.service.setLevel(this.level);
      this.service.levelUpdate$.subscribe(levelUpdate=>this.levelUpdate=levelUpdate);
      this.newLevelUpdate();
    })
    
  }

  mettreStatAJour(){
    this.vigor=this.stuff.vigor;
    this.esprit=this.stuff.esprit;
    this.endurance=this.stuff.endurance;
    this.force=this.stuff.force;
    this.dexterite=this.stuff.dexterite;
    this.intelligence=this.stuff.intelligence;
    this.foi=this.stuff.foi;
    this.esoterisme=this.stuff.esoterisme;
    this.service.setVigor(this.vigor);
    this.service.setVigorUpdate(this.vigor);
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate);
    this.service.setEsprit(Number(this.esprit));
    this.service.setEspritUpdate(this.esprit);
    this.service.espritUpdate$.subscribe(espritUpdate=>this.espritUpdate=espritUpdate);
    this.service.setEndurance(Number(this.endurance));
    this.service.setEnduranceUpdate(this.endurance);
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)
    this.service.setForce(Number(this.force));
    this.service.setForceUpdate(this.force);
    this.service.forceUpdate$.subscribe(forceUpdate=>this.forceUpdate=forceUpdate);
    this.service.setDexterite(Number(this.dexterite));
    this.service.setDexteriteUpdate(this.dexterite);
    this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.dexteriteUpdate=dexteriteUpdate)
    this.service.setIntelligence(Number(this.intelligence));
    this.service.setIntelligenceUpdate(this.intelligence);
    this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.intelligenceUpdate=intelligenceUpdate)
    this.service.setFoi(Number(this.foi));
    this.service.setFoiUpdate(this.foi);
    this.service.foiUpdate$.subscribe(foiUpdate=>this.foiUpdate=foiUpdate)
    this.service.setEsoterisme(Number(this.endurance));
    this.service.setEsoterismeUpdate(this.esoterisme);
    this.service.esoterismeUpdate$.subscribe(esoterismeUpdate=>this.esoterismeUpdate=esoterismeUpdate)
    this.service.setLevel(this.level);
    this.service.levelUpdate$.subscribe(levelUpdate=>this.levelUpdate=levelUpdate);
    this.newLevelUpdate();
    this.level= this.vigor+this.esprit+this.endurance+this.force+this.dexterite+this.intelligence+this.foi+this.esoterisme;
    this.service.setLevel(this.levelUpdate);
    this.vigorUpdateForm.setValue(this.vigor);
    this.espritUpdateForm.setValue(this.esprit);
    this.enduranceUpdateForm.setValue(this.endurance);
    this.forceUpdateForm.setValue(this.force);
    this.dexteriteUpdateForm.setValue(this.dexterite);
    this.intelligenceUpdateForm.setValue(this.intelligence);
    this.foiUpdateForm.setValue(this.foi);
    this.esoterismeUpdateForm.setValue(this.esoterisme);

  }
  newLevelUpdate(){
    this.levelUpdate=this.vigorUpdate+this.espritUpdate+this.enduranceUpdate+this.forceUpdate+this.dexteriteUpdate+this.intelligenceUpdate+this.foiUpdate+this.esoterismeUpdate;
    this.service.setLevelUpdate(this.levelUpdate);
  }
  newVigorUpdate(event: Event){
    this.vigorUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setVigorUpdate(this.vigorUpdate);
    this.newLevelUpdate();
  }
  newEspritUpdate(event: Event){
    this.espritUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setEspritUpdate(this.espritUpdate);
    this.newLevelUpdate();
  }
  newEnduranceUpdate(event: Event){
    this.enduranceUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setEnduranceUpdate(this.enduranceUpdate);
    this.newLevelUpdate();
  }
  newForceUpdate(event: Event){
    this.forceUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setForceUpdate(this.forceUpdate);
    this.newLevelUpdate();
  }
  newDexteriteUpdate(event: Event){
    this.vigorUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setDexteriteUpdate(this.dexteriteUpdate);
    this.newLevelUpdate();
  }
  newIntelligenceUpdate(event: Event){
    this.intelligenceUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setIntelligenceUpdate(this.intelligenceUpdate);
    this.newLevelUpdate();
  }
  newFoiUpdate(event: Event){
    this.foiUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setFoiUpdate(this.foiUpdate);
    this.newLevelUpdate();
  }
  newEsoterismeUpdate(event: Event){
    this.esoterismeUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setEsoterismeUpdate(this.esoterismeUpdate);
    this.newLevelUpdate();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StatServiceService } from '../../stat-service.service';
import { ApiService } from '../../api.service';
import { Classes } from '../../classes';
@Component({
  selector: 'app-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrl: './stat-form.component.css'
})
export class StatFormComponent {
  
  constructor(private service: StatServiceService , public apiservice: ApiService){}

  vigor = 0 ;
  vigorUpdateForm=new FormControl('') ;
  vigorUpdate=Number(this.vigorUpdateForm);
  esprit= 0;
  espritUpdateForm=new FormControl('') ;
  espritUpdate=Number(this.espritUpdateForm);
  endurance = 0;
  enduranceUpdateForm=new FormControl('') ;
  enduranceUpdate=Number(this.enduranceUpdateForm);
  force= 0;
  forceUpdateForm=new FormControl('') ;
  forceUpdate=Number(this.forceUpdateForm);
  dexterite =0;
  dexteriteUpdateForm=new FormControl('') ;
  dexteriteUpdate=Number(this.dexteriteUpdateForm);
  intelligence = 0;
  intelligenceUpdateForm=new FormControl('') ;
  intelligenceUpdate=Number(this.intelligenceUpdateForm);
  foi= 0;
  foiUpdateForm=new FormControl('') ;
  foiUpdate=Number(this.foiUpdateForm);
  esoterisme = 0;
  esoterismeUpdateForm=new FormControl('') ;
  esoterismeUpdate=Number(this.esoterismeUpdateForm);
  ngOnInit(){
    this.service.setVigor(Number(this.vigor));
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate);
    this.service.setEsprit(Number(this.esprit));
    this.service.espritUpdate$.subscribe(espritUpdate=>this.espritUpdate=espritUpdate);
    this.service.setEndurance(Number(this.endurance));
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)
    this.service.setForce(Number(this.force));
    this.service.forceUpdate$.subscribe(forceUpdate=>this.forceUpdate=forceUpdate);
    this.service.setDexterite(Number(this.dexterite));
    this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.dexteriteUpdate=dexteriteUpdate)
    this.service.setIntelligence(Number(this.intelligence));
    this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.intelligenceUpdate=intelligenceUpdate)
    this.service.setFoi(Number(this.foi));
    this.service.foiUpdate$.subscribe(foiUpdate=>this.foiUpdate=foiUpdate)
    this.service.setEsoterisme(Number(this.endurance));
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)


    this.apiservice.getClasses("17f69d4ac46l0i32hju3peo5nijzbj").subscribe(a=>{
      this.vigor+=parseInt(a.data.stats['vigor']);
      
    })
  }
  newVigorUpdate(event: Event){
    this.vigorUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setVigorUpdate(this.vigorUpdate);
  }
  newEspritUpdate(event: Event){
    this.espritUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setEspritUpdate(this.espritUpdate);
  }
  newEnduranceUpdate(event: Event){
    this.enduranceUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setEnduranceUpdate(this.enduranceUpdate);
  }
  newForceUpdate(event: Event){
    this.forceUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setForceUpdate(this.forceUpdate);
  }
  newDexteriteUpdate(event: Event){
    this.vigorUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setDexteriteUpdate(this.dexteriteUpdate);
  }
  newIntelligenceUpdate(event: Event){
    this.intelligenceUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setIntelligenceUpdate(this.intelligenceUpdate);
  }
  newFoiUpdate(event: Event){
    this.foiUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setFoiUpdate(this.foiUpdate);
  }
  newEsoterismeUpdate(event: Event){
    this.esoterismeUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setEsoterismeUpdate(this.esoterismeUpdate);
  }
}

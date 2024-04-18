import { Component } from '@angular/core';
import { Stuff } from '../interface/stuff';
import { DatabaseService } from '../api/database.service';
import { ApiService } from '../api/api.service';
import { StatServiceService } from '../stat-service.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrl: './build.component.css'
})
export class BuildComponent {
  stuff : Stuff;
  database = new DatabaseService();
  classes : string[] = [];
  className : string = "";
  armors : string[] = [];
  helmetName : string = "";
  chestplateName : string = "";
  gantletName: string = "";
  bootsName : string = "";
  talismans : string[] = [];
  talismansName : string[] = [];
  hands : string[] = [];
  handName : string[] = [];
  constructor(public apiService : ApiService, private service: StatServiceService){
    this.stuff = {
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
    this.getAll();
  }
  ngOnInit(): void{

    this.service.stuff$.subscribe(stuff=>this.stuff=stuff)
  }

  public getAll(){
    this.apiService.getIds("classes").subscribe(element => {
      if(element.data){
        element.data.forEach(id => {
          this.classes.push(id.id);
        });
      }
    });
    this.armors.push("");
    this.apiService.getIds("armors").subscribe(element => {
      if(element.data){
        element.data.forEach(id => {
          this.armors.push(id.id);
        });
      }
    });
    this.hands.push("");
    this.apiService.getIds("shields").subscribe(element => {
      if(element.data){
        element.data.forEach(id => {
          this.hands.push(id.id);
        });
      }
    });
    this.apiService.getIds("weapons").subscribe(element => {
      if(element.data){
        element.data.forEach(id => {
          this.hands.push(id.id);
        });
      }
    });
    this.talismans.push("");
    this.apiService.getIds("talismans").subscribe(element => {
      if(element.data){
        element.data.forEach(id => {
          this.talismans.push(id.id);
        });
      }
    });
  }

  public getStuff(stuffName : string){
    if(stuffName != "")
      this.database.getStuff(stuffName).then((value) => {
        this.stuff = value;
        this.updateValue();
      });
  }

  public updateValue(vara ?: boolean){
    if(this.stuff.classId != "")
      this.apiService.getClasses(this.stuff.classId).subscribe(classes => {
        if (classes.data){
          this.className = classes.data.name;
          if(vara){
            this.stuff.endurance = +classes.data.stats.endurance;
            this.stuff.vigor = +classes.data.stats.vigor;
            this.stuff.esoterisme = +classes.data.stats.arcane;
            this.stuff.foi = +classes.data.stats.faith;
            this.stuff.force = +classes.data.stats.strength;
            this.stuff.esprit = +classes.data.stats.mind;
            this.stuff.level = +classes.data.stats.level;
            this.stuff.dexterite = +classes.data.stats.dexterity;
            this.stuff.intelligence = +classes.data.stats.intelligence;
          }
          this.service.setStuff(this.stuff);
        }
      });
  }
  public saveStuff(stuffName : string){
    this.stuff.stuffName = stuffName;
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.stuff.vigor=vigorUpdate)
    this.service.espritUpdate$.subscribe(espritUpdate=>this.stuff.esprit=espritUpdate)
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.stuff.endurance=enduranceUpdate)
    this.service.forceUpdate$.subscribe(forceUpdate=>this.stuff.force=forceUpdate)
    this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.stuff.dexterite=dexteriteUpdate)
    this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.stuff.intelligence=intelligenceUpdate)
    this.service.foiUpdate$.subscribe(foiUpdate=>this.stuff.foi=foiUpdate)
    this.service.esoterismeUpdate$.subscribe(esoterismeUpdate=>this.stuff.esoterisme=esoterismeUpdate)
    console.log(this.stuff.vigor)
    this.database.createOrChangeStuff(this.stuff);
  }
}



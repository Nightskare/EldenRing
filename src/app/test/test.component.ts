import { Component } from '@angular/core';
import { Stuff } from '../interface/stuff';
import { DatabaseService } from '../api/database.service';
import { AuthenticationService } from '../api/authentication.service';
import { isEmpty } from 'rxjs';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  authenticationService = new AuthenticationService();
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
  constructor(public apiService : ApiService){
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

  public updateValue(){
    if(this.stuff.classId != "")
      this.apiService.getClasses(this.stuff.classId).subscribe(classes => {
        if (classes.data){
          this.className = classes.data.name;
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
      });
      if(this.stuff.helmetId != "")
        this.apiService.getArmors(this.stuff.helmetId).subscribe(armor => {
          if (armor.data){
            this.helmetName = armor.data.name;
          }
      });
      if(this.stuff.chestplateId != "")
        this.apiService.getArmors(this.stuff.chestplateId).subscribe(armor => {
          if (armor.data){
            this.chestplateName = armor.data.name;
          }
      });
      if(this.stuff.gantletId != "")
        this.apiService.getArmors(this.stuff.gantletId).subscribe(armor => {
          if (armor.data){
            this.gantletName = armor.data.name;
          }
      });
      if(this.stuff.bootsId != "")
        this.apiService.getArmors(this.stuff.bootsId).subscribe(armor => {
          if (armor.data){
            this.bootsName = armor.data.name;
          }
      });
      if(this.stuff.weaponsId){
        for(var i = 0; i < 2; i++){
          this.apiService.getWeapons(this.stuff.weaponsId[i]).subscribe(weapon =>{
            if (weapon.success){
              this.handName[i] = weapon.data.name;
              console.log(weapon);
              console.log("J'ai une arme");
            }
          });
          this.apiService.getShields(this.stuff.weaponsId[i]).subscribe(weapon =>{
            if (weapon.success){
              this.handName[i] = weapon.data.name;
              console.log(weapon);
              console.log("J'ai un shield");
            }
          });
        }
      }
      if(this.stuff.talismansIds){
        for(var i = 0; i < 4 ; i++){
          this.apiService.getTalismans(this.stuff.talismansIds[i]).subscribe(talismans => {
            this.talismansName[i] = talismans.data.name;
          })
        }
      }
  }
  public saveStuff(stuffName : string){
    this.stuff.stuffName = stuffName;
    this.database.createOrChangeStuff(this.stuff);
  }

  public print(item : string) : string{
    return item;
  }
}

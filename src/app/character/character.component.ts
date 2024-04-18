import { Component } from '@angular/core';
import { DatabaseService } from '../api/database.service';
import { ApiService } from '../api/api.service';
import { Stuff } from '../interface/stuff';
import { StatServiceService } from '../stat-service.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  stuff : Stuff;
  helmetImg: string;
  helmetName: string;
  nameStuff: string;
  constructor(private service: StatServiceService , public apiservice: ApiService){
    this.helmetImg="";
    this.helmetName="";
    this.nameStuff="Pas de personnage défini";
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
  };
  ngOnInit(){
    this.service.stuff$.subscribe(stuff=>{this.stuff=stuff;this.mettreImageAJour()});
}
mettreImageAJour(){
  this.nameStuff=this.stuff.stuffName;
  if(this.stuff.helmetId != "")
    this.apiservice.getArmors(this.stuff.helmetId).subscribe(armor => {
      if (armor.data){
        this.helmetImg = armor.data.image;
        this.helmetName= armor.data.name;
        console.log(this.helmetImg);
      }
  });
}

}

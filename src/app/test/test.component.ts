import { Component } from '@angular/core';
import { Stuff } from '../interface/stuff';
import { DatabaseService } from '../api/database.service';
import { AuthenticationService } from '../api/authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  authenticationService = new AuthenticationService();
  stuffs : any;
  database = new DatabaseService();
  constructor(){
    var stuff : Stuff = {
      userId: "b",
      stuffName: "c",
      classId: "d",
      helmetId: "e",
      chestplateId: "f",
      gantletId: "g",
      bootsId: "h",
      talismansIds: ["h", "i", "j", "k"],
      weaponsId: ["l", "m"]
    };
    //this.database.createStuff(stuff);
    this.yolo();
  }

  async yolo(){
    this.stuffs = await this.database.getStuffs();
    console.log(this.stuffs);
  }
}

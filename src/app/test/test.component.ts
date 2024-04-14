import { Component } from '@angular/core';
import { Stuff } from '../interface/stuff';
import { DatabaseService } from '../api/database.service';
import { AuthenticationService } from '../api/authentication.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  authenticationService = new AuthenticationService();
  stuff : Stuff;
  database = new DatabaseService();
  constructor(){
    this.stuff = {
      userId: "",
      stuffName: "",
      classId: "",
      helmetId: "",
      chestplateId: "",
      gantletId: "",
      bootsId: "",
      talismansIds: [],
      weaponsId: []
    };
    this.getStuff(this.stuff.stuffName);
  }

  public getStuff(stuffName : string){
    this.database.getStuff(stuffName).then((value) => {
      this.stuff = value;
      console.log(this.stuff);
    });
  }
}

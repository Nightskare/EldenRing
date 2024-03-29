import { Component } from '@angular/core';
import { Weapons } from '../weapons';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tableau-weapon',
  templateUrl: './tableau-weapon.component.html',
  styleUrl: './tableau-weapon.component.css'
})
export class TableauWeaponComponent {
  displayedColumns: string[] = ['data.name', 'data.image', 'data.description', 'data.category', 'data.weight', 'data.attack', 'data.defense', 'data.requiredAttributes', 'data.scalesWith'];
  dataSource : Array<Weapons> = this.getAllWeapons();
  constructor(public apiService : ApiService) {}

  public  getAllWeapons() : Array<Weapons>{
    var tableau = document.getElementById("data");
    var myData : Array<Weapons> = [];
    this.apiService.getIds("weapons").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getWeapons(a.data[i].id).subscribe(b => {
          myData.push(b);
        });
      }
    });
    return myData;
    //myData.sort((a, b) => (a.data.id > b.data.id) ? 1 : (a.data.id < b.data.id) ? -1 : 0);
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { IdList } from '../../interface/id-list';
import { Weapons } from '../../interface/weapons';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getAllWeapons();
  }
  public getAllWeapons(){
    var tableau = document.getElementById("data");
    var myData : Array<Weapons> = [];
    this.apiService.getIds("weapons").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getWeapons(a.data[i].id).subscribe(b => {
          myData.push(b);
          if(tableau)
            this.updateTableWeapons(tableau, myData);
        });
      }
    });
    //myData.sort((a, b) => (a.data.id > b.data.id) ? 1 : (a.data.id < b.data.id) ? -1 : 0);
  }

  public updateTableWeapons(table : HTMLElement, data : Array<Weapons>){
    table.innerHTML = "";
    data.forEach(element => {
      if(table){
        table.innerHTML += "<tr><th>"+element.data.id+"</th><th>"+element.data.name+"</th><th>"+element.data.description+"</th></tr>";
      }
    });
  }

  public getWeapons(id : string){
    this.apiService.getWeapons(id).subscribe(
      a => {
        let element = document.getElementById("nom");
        let elementDeux = document.getElementById("desc");
        if (element && elementDeux){
          element.innerText = a.data.name;
          elementDeux.innerText = a.data.description;
        }
      }
    )
  }
}

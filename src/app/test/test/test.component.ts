import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getWeapons("17f69c35d2cl0i1oh7zuqfb3mdvsj");
  }

  public getWeapons(id : string){
    this.apiService.getWeapons(id).subscribe(
      a => {
        let element = document.getElementById("nom");
        let elementDeux = document.getElementById("desc")
        if (element && elementDeux){
          element.innerText = a.data.name;
          elementDeux.innerText = a.data.description;
        }

      }
    )
  }
}

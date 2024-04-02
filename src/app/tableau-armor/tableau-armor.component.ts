import { Component, ViewChild } from '@angular/core';
import { Armors, PropertiesType } from '../interface/armors';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api/api.service';


const ARMOR_DATA: Armors[] = [

];

@Component({
  selector: 'app-tableau-armor',
  templateUrl: './tableau-armor.component.html',
  styleUrl: './tableau-armor.component.css'
})
export class TableauArmorComponent {
  displayedColumns: string[] = ['data.name', 'data.image', 'data.description', 'data.category', 'data.weight', 'data.dmgNegation', 'data.resistance'];
  @ViewChild(MatTable) table !: MatTable<any>;
  dataSource = new MatTableDataSource<Armors>();
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getAllArmors();
  }

  public getAllArmors() {
    this.apiService.getIds("armors").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getArmors(a.data[i].id).subscribe(b => {
          this.dataSource.data.push(b);
          this.table.renderRows();
        });
      }
    });
    //myData.sort((a, b) => (a.data.id > b.data.id) ? 1 : (a.data.id < b.data.id) ? -1 : 0);
  }
  public getAllProperties(input : Array<PropertiesType>) : string{
    var buffer : string = "";
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      buffer += element.name;
      buffer += " : ";
      buffer += element.amount;
      if(index != input.length-1)
        buffer += ", "
    }
    return buffer;
  }
}

import { Component, ViewChild } from '@angular/core';
import { PropertiesType, Shields } from '../shields';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-tableau-shield',
  templateUrl: './tableau-shield.component.html',
  styleUrl: './tableau-shield.component.css'
})
export class TableauShieldComponent {
  displayedColumns: string[] = ['data.name', 'data.image', 'data.description', 'data.category', 'data.weight', 'data.attack', 'data.defense', 'data.requiredAttributes', 'data.scalesWith'];
  @ViewChild(MatTable) table !: MatTable<any>;
  dataSource = new MatTableDataSource<Shields>();
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getAllShields();
  }

  public getAllShields() {
    this.apiService.getIds("shields").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getShields(a.data[i].id).subscribe(b => {
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

import { Component, ViewChild } from '@angular/core';
import { Talismans } from '../interface/talismans';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api/api.service';



@Component({
  selector: 'app-tableau-talisman',
  templateUrl: './tableau-talisman.component.html',
  styleUrl: './tableau-talisman.component.css'
})
export class TableauTalismanComponent {
  displayedColumns: string[] = ['data.name', 'data.image', 'data.description', 'data.effects'];
  @ViewChild(MatTable) table !: MatTable<any>;
  dataSource = new MatTableDataSource<Talismans>();
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getAllTalismans();
  }

  public getAllTalismans() {
    this.apiService.getIds("talismans").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getTalismans(a.data[i].id).subscribe(b => {
          this.dataSource.data.push(b);
          this.table.renderRows();
        });
      }
    });
    //myData.sort((a, b) => (a.data.id > b.data.id) ? 1 : (a.data.id < b.data.id) ? -1 : 0);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Weapons } from '../weapons';
import { ApiService } from '../api.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tableau-weapon',
  templateUrl: './tableau-weapon.component.html',
  styleUrl: './tableau-weapon.component.css'
})
export class TableauWeaponComponent implements OnInit{
  displayedColumns: string[] = ['data.name', 'data.image', 'data.description', 'data.category', 'data.weight', 'data.attack', 'data.defense', 'data.requiredAttributes', 'data.scalesWith'];
  @ViewChild(MatTable) table !: MatTable<any>;
  dataSource = new MatTableDataSource<Weapons>();
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getAllWeapons();
  }

  public getAllWeapons() {
    this.apiService.getIds("weapons").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getWeapons(a.data[i].id).subscribe(b => {
          this.dataSource.data.push(b);
          this.table.renderRows();
        });
      }
    });
    //myData.sort((a, b) => (a.data.id > b.data.id) ? 1 : (a.data.id < b.data.id) ? -1 : 0);
  }
}

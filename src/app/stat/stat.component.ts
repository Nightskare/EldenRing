import { Component,ViewChild  } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Classes } from '../classes';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent {
  level = new FormControl('');
  displayedColumns: string[] = ['data.name', 'data.image', 'data.description', 'data.stat'];
  @ViewChild(MatTable) table !: MatTable<any>;
  Classes = new MatTableDataSource<Classes>();
  constructor(public apiService : ApiService) {}
  ngOnInit(){
    this.getAllClasses();
  }

  public getAllClasses() {
    this.apiService.getIds("classes").subscribe(a => {
      for(let i : number = 0; i < a.count; i++){
        this.apiService.getClasses(a.data[i].id).subscribe(b => {
          this.Classes.data.push(b);
          this.table.renderRows();
        });
      }
    });
  }
}

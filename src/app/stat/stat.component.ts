import { Component,ViewChild  } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StatServiceService } from '../stat-service.service';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent {
  level :number;
  levelUpdate: number;
  constructor(private service:StatServiceService){
    this.level=0;
    this.levelUpdate=0;
  }
  ngOnInit(): void{
    this.service.level$.subscribe(level=>this.level=level)
    this.service.levelUpdate$.subscribe(levelUpdate=>this.levelUpdate=levelUpdate)
  }
}

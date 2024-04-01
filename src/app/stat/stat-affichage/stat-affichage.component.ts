import { Component } from '@angular/core';
import { StatServiceService } from '../../stat-service.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-stat-affichage',
  templateUrl: './stat-affichage.component.html',
  styleUrl: './stat-affichage.component.css'
})
export class StatAffichageComponent {
  vigor:number;
  vigorUpdate: number;
  totalvigor:number;
  constructor(private service:StatServiceService){
    this.vigor=0;
    this.vigorUpdate=0;
    this.totalvigor=500;
  }
  ngOnInit(): void{
    this.vigor= Number(this.service.getVigor());
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate)
  }
}

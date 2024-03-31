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
  vigorUpdate:BehaviorSubject<number>= new BehaviorSubject<number>(0);
  constructor(private service:StatServiceService){
    this.vigor=0;
  }
  ngOnInit(): void{
    this.vigor= this.service.getVigor();
    this.service.vigorUpdate$.subscribe(this.vigorUpdate);
  }
}

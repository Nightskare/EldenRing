import { Component,ViewChild  } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StatServiceService } from '../stat-service.service';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent {
  level = new FormControl('');
  vigorUpdate: number;
  espritUpdate: number;
  enduranceUpdate: number;
  forceUpdate: number;
  dexteriteUpdate: number;
  intelligenceUpdate: number;
  foiUpdate: number;
  esoterismeUpdate: number;
  constructor(private service:StatServiceService){
    this.vigorUpdate=0;
    this.espritUpdate=0;
    this.enduranceUpdate=0;
    this.forceUpdate=0;
    this.dexteriteUpdate=0;
    this.intelligenceUpdate=0;
    this.foiUpdate=0;
    this.esoterismeUpdate=0;
  }
  ngOnInit(): void{
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate)
    this.service.espritUpdate$.subscribe(espritUpdate=>this.espritUpdate=espritUpdate)
    this.service.enduranceUpdate$.subscribe(enduranceUpdate=>this.enduranceUpdate=enduranceUpdate)
    this.service.forceUpdate$.subscribe(forceUpdate=>this.forceUpdate=forceUpdate)
    this.service.dexteriteUpdate$.subscribe(dexteriteUpdate=>this.dexteriteUpdate=dexteriteUpdate)
    this.service.intelligenceUpdate$.subscribe(intelligenceUpdate=>this.intelligenceUpdate=intelligenceUpdate)
    this.service.foiUpdate$.subscribe(foiUpdate=>this.foiUpdate=foiUpdate)
    this.service.esoterismeUpdate$.subscribe(esoterismeUpdate=>this.esoterismeUpdate=esoterismeUpdate)
  }
}

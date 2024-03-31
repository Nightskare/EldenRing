import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StatServiceService } from '../../stat-service.service';
@Component({
  selector: 'app-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrl: './stat-form.component.css'
})
export class StatFormComponent {
  
  constructor(private service: StatServiceService){}

  vigor = new FormControl('');
  vigorUpdate= this.vigor;
  esprit= new FormControl('');
  endurance = new FormControl('');
  force= new FormControl('');
  dexterite =new FormControl('');
  intelligence = new FormControl('');
  foi= new FormControl('');
  esoterisme = new FormControl('');
  ngOnInit(){
    this.service.setVigor(Number(this.vigor.value));
    this.service.setVigorUpdate(Number(this.vigorUpdate.value));
  }
}

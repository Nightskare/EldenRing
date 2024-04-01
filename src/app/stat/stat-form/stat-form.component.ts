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

  vigor = 0 ;
  vigorUpdateForm=new FormControl('') ;
  vigorUpdate=Number(this.vigorUpdateForm);
  esprit= new FormControl('');
  endurance = new FormControl('');
  force= new FormControl('');
  dexterite =new FormControl('');
  intelligence = new FormControl('');
  foi= new FormControl('');
  esoterisme = new FormControl('');
  ngOnInit(){
    this.service.setVigor(Number(this.vigor));
    this.service.vigorUpdate$.subscribe(vigorUpdate=>this.vigorUpdate=vigorUpdate)
  }
  newVigorUpdate(event: Event){
    this.vigorUpdate=Number((event.target as HTMLInputElement).value);
    this.service.setVigorUpdate(this.vigorUpdate);
    console.log(this.vigorUpdate);
  }
}

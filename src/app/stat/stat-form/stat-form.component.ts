import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrl: './stat-form.component.css'
})
export class StatFormComponent {
  vigorValue = new FormControl('').value;
  @Output() vigor = new EventEmitter<number>();
  SendVigor(){
    this.vigor.emit(Number(this.vigorValue));
  }
  esprit= new FormControl('');
  endurance = new FormControl('');
  force= new FormControl('');
  dexterite =new FormControl('');
  intelligence = new FormControl('');
  foi= new FormControl('');
  esoterisme = new FormControl('');
}

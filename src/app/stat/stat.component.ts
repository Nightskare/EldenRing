import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent {
  level = new FormControl('');
}

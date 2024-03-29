import { Component } from '@angular/core';
import { Shields } from '../shields';

const SHIELD_DATA: Shields[] = [

];

@Component({
  selector: 'app-tableau-shield',
  templateUrl: './tableau-shield.component.html',
  styleUrl: './tableau-shield.component.css'
})
export class TableauShieldComponent {
  displayedColumns: string[] = ['name', 'image', 'description', 'category', 'weight', 'attack', 'defense', 'requiredAttributes', 'scalesWith'];
  dataSource = SHIELD_DATA;
}

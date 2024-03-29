import { Component } from '@angular/core';
import { Armors } from '../armors';

const ARMOR_DATA: Armors[] = [

];

@Component({
  selector: 'app-tableau-armor',
  templateUrl: './tableau-armor.component.html',
  styleUrl: './tableau-armor.component.css'
})
export class TableauArmorComponent {
  displayedColumns: string[] = ['name', 'image', 'description', 'category', 'weight', 'dmgNegation', 'resistance'];
  dataSource = ARMOR_DATA;
}

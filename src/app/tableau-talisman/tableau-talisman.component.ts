import { Component } from '@angular/core';
import { Talismans } from '../talismans';


const TALISMAN_DATA: Talismans[] = [

];

@Component({
  selector: 'app-tableau-talisman',
  templateUrl: './tableau-talisman.component.html',
  styleUrl: './tableau-talisman.component.css'
})
export class TableauTalismanComponent {
  displayedColumns: string[] = ['name', 'image', 'description', 'effects'];
  dataSource = TALISMAN_DATA;
}

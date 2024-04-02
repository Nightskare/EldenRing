import { Component } from '@angular/core';
import { TableauArmorComponent } from '../tableau-armor/tableau-armor.component';
import { TableauShieldComponent } from '../tableau-shield/tableau-shield.component';
import { TableauTalismanComponent } from '../tableau-talisman/tableau-talisman.component';
import { TableauWeaponComponent } from '../tableau-weapon/tableau-weapon.component';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})

export class ListItemComponent {
    selected = "All"
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    }
}

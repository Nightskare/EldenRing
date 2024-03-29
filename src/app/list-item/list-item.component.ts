import { Component } from '@angular/core';

export interface WeaponTable {
  id: string;
  name: string;
  image : string;
  description : string;
  category : string;
  weight : number;
  attack : [{
      name : string;
      amount : number;
  }];
  defense : [{
      name : string;
      amount : number;
  }];
  requiredAttributes : [{
      name : string;
      amount : number;
  }];
  scalesWith : [{
      name : string;
      scaling : string;
  }];
}

export interface ShieldTable {
  id : string;
  name : string; 
  image : string;
  description : string; 
  category : string; 
  weight : number; 
  attack : {
      name : string;
      amount : number;
  }; 
  defense : {
      name : string;
      amount : number;
  } 
  requiredAttributes : {
      name : string;
      amount : number;
  }; 
  scalesWith : {
      name : string;
      scaling : string;
  };
}

export interface ArmorTable {
  id : string; 
  name : string; 
  image : string; 
  description : string; 
  category : string; 
  weight : number;
  dmgNegation : {
    name : string;
    amount : number;
  }; 
  resistance : {
    name : string;
    amount : number;
  }
}

export interface TalismanTable {
  id : string; 
  name : string; 
  image : string; 
  description : string; 
  effects : string; 
}

const WEAPONS_DATA: WeaponTable[] = [

];

const SHIELD_DATA: ShieldTable[] = [

];

const ARMOR_DATA: ArmorTable[] = [

];

const TALISMAN_DATA: TalismanTable[] = [

];

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})

export class ListItemComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = WEAPONS_DATA;
}

export interface Shields {
  success : boolean;
  data : {
    id : string; // Id of the Shield
    name : string; // Name of the Shield
    image : string; // Image URL of the Shield
    description : string; // Short description of the Shield
    category : string; // What category of shield. Example: Small Shield, Medium Shield, etc.
    weight : number; // How much the Shield weights when equipped
    attack : Array<PropertiesType>; // How much damage the Shield does when used as a weapon
    defense : Array<PropertiesType>; // How much damage the Shield blocks when used as a shield
    requiredAttributes : Array<PropertiesType>; // What are the required attribute amount in order to properly use this shield. Example: { name: "Str", amount: 20 }
    scalesWith : Array<scalesType>; // How much the shield scales and with what attributes. Example: { name: "Str", scaling: "B" }
  }
}

export interface PropertiesType {
  name : string;
  amount : number;
}

export interface scalesType{
  name : string;
  scaling : string;
}

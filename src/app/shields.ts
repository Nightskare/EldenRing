export interface Shields {
  success : boolean;
  data : {
    id : string; // Id of the Shield
    name : string; // Name of the Shield
    image : string; // Image URL of the Shield
    description : string; // Short description of the Shield
    category : string; // What category of shield. Example: Small Shield, Medium Shield, etc.
    weight : number; // How much the Shield weights when equipped
    attack : {
      name : string;
      amount : number;
    }; // How much damage the Shield does when used as a weapon
    defense : {
      name : string;
      amount : number;
    } // How much damage the Shield blocks when used as a shield
    requiredAttributes : {
      name : string;
      amount : number;
    }; // What are the required attribute amount in order to properly use this shield. Example: { name: "Str", amount: 20 }
    scalesWith : {
      name : string;
      scaling : string;
    }; // How much the shield scales and with what attributes. Example: { name: "Str", scaling: "B" }
  }
}

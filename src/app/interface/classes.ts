export interface Classes {
  success : boolean;
  data : {
    id : string; // Id of the class
    name : string; // Name of the class
    image : string; // Image URL of the class character using the initial equipment provided
    description : string; // Short description of the class
    stats : {
      level : string;
      vigor : string;
      mind : string;
      endurance : string;
      strength : string;
      dexterity : string;
      intelligence : string;
      faith : string;
      arcane : string;
    } // Initial stats of the class
  }
}

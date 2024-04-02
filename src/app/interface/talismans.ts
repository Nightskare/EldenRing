export interface Talismans {
  success : boolean;
  data : {
    id : string; // Id of the Talisman
    name : string; // Name of the Talisman
    image : string; // Image URL of the Talisman icon
    description : string; // Short description of the Talisman
    effects : string; // What happens when we equip this Talisman
  }
}

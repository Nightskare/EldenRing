import { Armors } from "./armors";
import { Classes } from "./classes";
import { Shields } from "./shields";
import { Talismans } from "./talismans";
import { Weapons } from "./weapons";

export interface Stuff {
  id : string;
  nomDuStuff : string;
  class : Classes;
  helmet : Armors;
  chestplate : Armors;
  gantlet : Armors;
  boots : Armors;
  TalismanUn : Talismans;
  TalismanDeux : Talismans;
  TalismanTrois : Talismans;
  TalismanQuatre : Talismans;
  LeftWeapon : Weapons | Shields;
  RightWeapon : Weapons | Shields;
}

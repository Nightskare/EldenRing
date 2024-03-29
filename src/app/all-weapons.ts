import { Weapons } from "./weapons";

export interface AllWeapons {
  success : boolean;
  count : number;
  total : number;
  data : [Weapons]
}

export interface Weapons {
  success : boolean;
  data : {
    id : string;
    name : string;
    image : string;
    description : string;
    category : string;
    weight : number;
    attack : Array<PropertiesType>;
    defense : Array<PropertiesType>;
    requiredAttributes : Array<PropertiesType>;
    scalesWith : Array<scalesType>;
  }
}

interface PropertiesType {
  name : string;
  amount : number;
}

interface scalesType{
  name : string;
  scaling : string;
}

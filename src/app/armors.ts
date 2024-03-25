export interface Armors {
  success : boolean;
  data : {
    id : string; // Id of the armor piece
    name : string; // Name of the armor piece
    image : string; // Image URL of the armor piece
    description : string; // Short description of the armor piece
    category : string; // Category of the armor piece. Example: Leg Piece, Helmet, etc.
    weight : number; // How much this armor piece weights in your inventory
    dmgNegation : {
      name : string;
      amount : number;
    }; // How much damage this armor piece negates. Example: { "name": "Strike", amount: 6 }
    resistance : {
      name : string;
      amount : number;
    } // How much resistance wearing this armor piece provides. Example: { "name": "Poise", amount: 10 }
  }
}

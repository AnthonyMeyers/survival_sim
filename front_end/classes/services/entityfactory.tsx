import {Mdl_Character} from "../models/character";
import { Mdl_Entity } from "../models/entity";

export default class Srv_EntityFactory{
  id: number;
  entities: Mdl_Entity[];
  constructor()
  {
    this.id = 1;
    this.entities = [];
  }

  public createCharacter(positionX: number, positionY: number, name:string, entityType:string)
  {
      const player = new Mdl_Character(positionX,positionY,name,this.id, entityType)
      this.entities = [...this.entities,player];

      return player;
  }

}




 

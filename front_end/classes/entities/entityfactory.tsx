import Character from "./character";
import { Entity } from "./entity";

export default class EntityFactory{
  id: number;
  entities: Entity[];
  constructor()
  {
    this.id = 1;
    this.entities = [];
  }

  public createCharacter(positionX: number, positionY: number, name:string, entityType:string)
  {
      const player = new Character(positionX,positionY,name,this.id, entityType)
      this.entities.push(player);
      return player;
  }

}




 

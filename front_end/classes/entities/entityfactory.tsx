import Character from "./character";

export default class EntityFactory{
  id: number;
  constructor()
  {
    this.id = 1;
  }

  public createCharacter(positionX: number, positionY: number, name:string, sprite:string)
  {
      const character = new Character(positionX,positionY,name,sprite,this.id)
      return character;
  }

}




 

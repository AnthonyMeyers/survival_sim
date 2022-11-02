import { coords } from "../../types/coords";

export class Entity {
    protected posX: number;
    protected posY: number;
    protected entityType: string;
    protected borderLU: coords;
    protected borderRD: coords;

    constructor(positionX: number, positionY:number, entityType: string) {
      this.posX = positionX;
      this.posY = positionY;
      this.borderLU = {x:0,y:0}
      this.borderRD = {x:0,y:0}
      this.entityType = entityType;
    }
  }
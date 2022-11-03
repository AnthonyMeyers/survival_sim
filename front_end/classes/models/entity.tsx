import { coords } from "../../types/coords";
import { css_cls_movement } from "../entity_settings/entities";
import { css_cls_int_movement } from "../entity_settings/entities";

export abstract class Mdl_Entity {

    protected posX: number;
    protected posY: number;
    protected entityType: string;
    protected borderLU: coords;
    protected borderRD: coords;
    protected movement: css_cls_int_movement;

    //Player can become both other entities than human, open entity
    constructor(positionX: number, positionY:number, entityType: string) {
      this.posX = positionX;
      this.posY = positionY;
      this.borderLU = {x:0,y:0}
      this.borderRD = {x:0,y:0}
      this.entityType = entityType;
      this.movement = css_cls_movement;
    }
  }
import { Mdl_Entity } from "./entity";

export abstract class Mdl_Animal extends Mdl_Entity{
protected type: string;
constructor(positionX: number, positionY:number, entityType: string)
{
    super(positionX, positionY, entityType)
    this.type = "animal";
}

}
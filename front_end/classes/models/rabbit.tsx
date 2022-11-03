import { Mdl_Animal } from "./animal";

export class rabbit extends Mdl_Animal{
subtype: string;


constructor(positionX: number, positionY:number, entityType: string)
{
    super(positionX, positionY, entityType)
    this.subtype = "Rabbit";
}

}
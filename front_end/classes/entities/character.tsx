import { Entity } from "./entity";

export default class Character extends Entity{
    //Types
    private name: string;
    private id: number;
    private speed : number;

    //Object construction
    constructor(positionX: number, positionY: number, name:string, id:number, entityType:string){
    super(positionX,positionY, entityType);
    this.name = name;
    this.speed = 30;
    this.id = id;
  }

    get charId():number
    {
        return this.id
    }

    set charId(id)
    {
        this.id = id
    }

    get charPosX():number
    {
        return this.posX
    }

    get charEntity():string
    {
        return this.entityType
    }

    set charPosX(charPosX)
    {
        this.posX = charPosX
    }

    get charPosY():number
    {
        return this.posY
    }

    set charPosY(charPosY)
    {
        this.posY = charPosY
    }

    get charSpeed()
    {
        return this.speed;
    }
  }


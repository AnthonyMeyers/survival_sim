import { Entity } from "./entity";

export default class Character extends Entity{
    //Types
    private name: string;
    private sprite: string;
    private id: number;
    private speed : number;

    //Object construction
    constructor(positionX: number, positionY: number, name:string, sprite:string, id:number){
    super(positionX,positionY);
    this.name = name;
    this.sprite = sprite;
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


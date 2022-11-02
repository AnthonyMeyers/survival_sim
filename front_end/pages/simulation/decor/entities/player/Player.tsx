import Character from "../../../../../classes/entities/character";
import {useEffect, useState} from "react";
import {movementList} from "../../../../../classes/entities/entities";
import { url } from "inspector";
import { setTimeout } from "timers";

interface Player {
  character:Character;
}

const Player = ({character}:Player) => {

const [player, setPlayer] = useState(character);
const [parentElement, setParentElement] = useState<Element | null>();
const [posX, setPosX] = useState(player.charPosX)
const [posY, setPosY] = useState(player.charPosY)
const [direction, setDirection] = useState<string>("down")

useEffect(()=>{
  document.addEventListener("keydown", handleCharactermovePress);
  
  return () => removeEventListener("keydown",handleCharactermovePress);
  
},[])

function handleCharactermovePress(e:KeyboardEvent)
{
  console.log(parentElement?.clientHeight);
  console.log(parentElement?.clientWidth)
  if(e.code == 'ArrowLeft')
  {
  player.charPosX = player.charPosX + player.charSpeed
  setPosX(player.charPosX);
  setDirection("moveleft");

}

  if(e.code == 'ArrowRight')
  {
  player.charPosX = player.charPosX - player.charSpeed
  setPosX(player.charPosX);
  setDirection("moveright");
}
  if(e.code == 'ArrowUp'){
  player.charPosY = player.charPosY + player.charSpeed 
  setPosY(player.charPosY);
  setDirection("moveup");
}
  if(e.code == 'ArrowDown'){
  player.charPosY = player.charPosY - player.charSpeed 
  setPosY(player.charPosY);
  setDirection("movedown");
}

}

  return (
    <div className={`${player.charEntity} player ${direction}`} id={'player-' + player.charId} style={{right: `${posX}px`,bottom: `${posY}px`}}></div>
  )
}

export default Player

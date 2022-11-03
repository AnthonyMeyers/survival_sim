import {Mdl_Character} from "../../../../../classes/models/character";
import {useEffect, useState} from "react";

interface Player {
  character:Mdl_Character,
  parent:Element;}
const Player = ({character,parent}:Player) => {

const [player, setPlayer] = useState(character);
const [posX, setPosX] = useState(player.charPosX)
const [posY, setPosY] = useState(player.charPosY)
const [direction, setDirection] = useState<string | null>(null)

useEffect(()=>{
  document.addEventListener("keydown", handleCharactermovePress);
  return () => removeEventListener("keydown",handleCharactermovePress);
  
},[])

function handleCharactermovePress(e:KeyboardEvent)
{
  const height = parent.clientHeight
  const width = parent.clientWidth

  if(e.code == 'ArrowLeft' && player.charPosX < width - 50)
  {

  player.charPosX = player.charPosX + player.charSpeed
  setPosX(player.charPosX);
  setDirection(player.charMovement.left);

}

  if(e.code == 'ArrowRight'&& player.charPosX > 15)
  {
  player.charPosX = player.charPosX - player.charSpeed
  setPosX(player.charPosX);
  setDirection(player.charMovement.right);
}
  if(e.code == 'ArrowUp' && player.charPosY < height- 20){
  player.charPosY = player.charPosY + player.charSpeed 
  setPosY(player.charPosY);
  setDirection(player.charMovement.up);
}
  if(e.code == 'ArrowDown'&& player.charPosY > 0 + 20){
  player.charPosY = player.charPosY - player.charSpeed 
  setPosY(player.charPosY);
  setDirection(player.charMovement.down);
}

}

  return (
    <div className={`${player.charEntity} player  ${direction}`} id={'player-' + player.charId} style={{right: `${posX}px`,bottom: `${posY}px`}}></div>
  )
}

export default Player

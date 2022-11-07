import {Mdl_Character} from "../../../../../classes/models/character";
import {useEffect, useState} from "react";

interface Player {
  character:Mdl_Character,
  parent:Element;}
const Player = ({character,parent}:Player) => {

const [player, setPlayer] = useState(character);
const [posX, setPosX] = useState(player ? player.charPosX : null)
const [posY, setPosY] = useState(player ? player.charPosY : null)
const [direction, setDirection] = useState<string | null>(null)

useEffect(()=>{
  document.addEventListener("keydown", handleCharactermovePress);
  return () => removeEventListener("keydown",handleCharactermovePress);
},[])

useEffect(()=>{
  document.addEventListener("keyup", handleCharacterstopLift);
  return () => removeEventListener("keyup",handleCharacterstopLift);
},[])

function handleCharacterstopLift(e:KeyboardEvent)
{

  if(player && "charPosX" in player && "charPosY" in player){
    if(e.code == 'ArrowLeft' )
    {
      setDirection(player.charMovement.stopLeft);
  }
  
    if(e.code == 'ArrowRight')
    {
      setDirection(player.charMovement.stopRight);
  }
    if(e.code == 'ArrowUp'){
      setDirection(player.charMovement.stopUp);
  }
    if(e.code == 'ArrowDown'){
      setDirection(player.charMovement.stopDown);
  }
}
}

function handleCharactermovePress(e:KeyboardEvent)
{
  const height = parent.clientHeight
  const width = parent.clientWidth
  if(player && "charPosX" in player && "charPosY" in player){
  if(e.code == 'ArrowLeft' && player.charPosX > 0)
  {
  player.charPosX = player.charPosX - player.charSpeed
  setPosX(player.charPosX);
  setDirection(player.charMovement.left);
}

  if(e.code == 'ArrowRight'&& player.charPosX < width - 40)
  {
  player.charPosX = player.charPosX + player.charSpeed
  setPosX(player.charPosX);
  setDirection(player.charMovement.right);
}
  if(e.code == 'ArrowUp' && player.charPosY > 0){
  player.charPosY = player.charPosY - player.charSpeed 
  setPosY(player.charPosY);
  setDirection(player.charMovement.up);
}
  if(e.code == 'ArrowDown'&& player.charPosY < height - 45){
  player.charPosY = player.charPosY + player.charSpeed 
  setPosY(player.charPosY);
  setDirection(player.charMovement.down);
}
}
}

  return (
    <>
    {player && <div className={`${player.charEntity} player  ${direction}`} id={'player-' + player.charId} style={{left: `${posX}px`,top: `${posY}px`}}>{player.charName}</div>}
  </>
  )
}

export default Player

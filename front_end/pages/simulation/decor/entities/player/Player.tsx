import Character from "../../../../../classes/entities/character";
import {useEffect, useLayoutEffect, useState} from "react";

interface Player {
  character:Character;
}

const Player = ({character}:Player) => {

const [player, setPlayer] = useState(character);
const [parentElement, setParentElement] = useState<Element | null>();
const [posX, setPosX] = useState(player.charPosX)
const [posY, setPosY] = useState(player.charPosY)

useEffect(()=>{
  document.addEventListener("keydown", handleCharactermovePress);
  setParentElement(document.querySelector("#decor"));
  //ADD MAIN BORDER IN NEXT PHASE
},[])

function handleCharactermovePress(e:KeyboardEvent)
{
  if(e.code == 'ArrowLeft')
  player.charPosX = player.charPosX + player.charSpeed
  setPosX(player.charPosX);

  if(e.code == 'ArrowRight')
  player.charPosX = player.charPosX - player.charSpeed
  setPosX(player.charPosX);

  if(e.code == 'ArrowUp')
  player.charPosY = player.charPosY + player.charSpeed 
  setPosY(player.charPosY);

  if(e.code == 'ArrowDown')
  player.charPosY = player.charPosY - player.charSpeed 
  setPosY(player.charPosY);
}

  return (
    <div className="player" id={'player-' + player.charId} style={{right: `${posX}px`,bottom: `${posY}px`}}></div>
  )
}

export default Player

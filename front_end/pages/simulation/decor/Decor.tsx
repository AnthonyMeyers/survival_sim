import { createRef, useEffect, useRef, useState, useLayoutEffect } from "react";
import {Mdl_Character} from "../../../classes/models/character";
import Srv_EntityFactory from "../../../classes/services/entityfactory"
import Player from "./entities/player/Player";
import Rabbit from "./entities/rabbit/Rabbit";
import Grid from "./grid/Grid";
import { selectPlayerState, setName } from "../../../data/playerSlice";
import { useDispatch, useSelector } from "react-redux";



const entityfactory = new Srv_EntityFactory()

const Decor = () => {
  const [parent, setParent] = useState<Element>()
  const {name, type, posX, posY} = useSelector(selectPlayerState);

  const [character,setCharacter] = useState<Mdl_Character>(entityfactory.createCharacter(posX,posY,name,type))

useEffect(()=>{
  const parentElement =  document.querySelector("#decor")
  if(parentElement != null && parentElement != undefined)
  {
    setParent(parentElement);
  }
 },[])

  return (
    <div className="decor" id="decor">
      <Grid></Grid>
      {character && parent &&  <Player character={character} parent={parent}></Player>}
    <Rabbit></Rabbit>
    </div>
  )
}

export default Decor
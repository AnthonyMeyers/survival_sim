import { createRef, useEffect, useRef, useState, useLayoutEffect } from "react";
import {Mdl_Character} from "../../../classes/models/character";
import Srv_EntityFactory from "../../../classes/services/entityfactory"
import Player from "./entities/player/Player";
import Rabbit from "./entities/rabbit/Rabbit";

const entityfactory = new Srv_EntityFactory()

const Decor = () => {
  const [parent, setParent] = useState<Element>()

  const [character,setCharacter] = useState<Mdl_Character>(entityfactory.createCharacter(50,50,"Grylls","human_male"))

useEffect(()=>{
  const parentElement =  document.querySelector("#decor")
  if(parentElement != null && parentElement != undefined)
  {
    setParent(parentElement);
  }
 },[])

  return (
    <div className="decor" id="decor">
      {character && parent &&  <Player character={character} parent={parent}></Player>}
    <Rabbit></Rabbit>
    </div>
  )
}

export default Decor
import { useEffect,useState, useRef } from "react";
import Character from "../../../classes/entities/character";
import EntityFactory from "../../../classes/entities/entityfactory"
import Player from "./entities/player/Player";

const entityfactory = new EntityFactory()

const Decor = () => {
  
  const [character,setCharacter] = useState<Character>(entityfactory.createCharacter(50,50,"Grylls",""))

  return (
    <div className="decor" id="decor">{character && <Player character={character}></Player>}
    </div>
  )
}

export default Decor
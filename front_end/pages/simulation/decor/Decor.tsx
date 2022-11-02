import { useState } from "react";
import Character from "../../../classes/entities/character";
import EntityFactory from "../../../classes/entities/entityfactory"
import Player from "./entities/player/Player";
import Rabbit from "./entities/rabbit/Rabbit";

const entityfactory = new EntityFactory()

const Decor = () => {
  
  const [character,setCharacter] = useState<Character>(entityfactory.createCharacter(50,50,"Grylls","human_male"))

  return (
    <div className="decor" id="decor">{character && <Player character={character}></Player>}
    <Rabbit></Rabbit>
    </div>
  )
}

export default Decor
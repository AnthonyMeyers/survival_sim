import { selectAdminOptionsState } from "../../../../data/adminOptions";
import { useDispatch, useSelector } from "react-redux";
import {use, useEffect, useLayoutEffect, useState} from "react";
import axios from 'axios';

interface gridcoords {
  gridX:number,
  gridY: number,
  entity:string
}

const Grid = () => {
    const [props, setProps] = useState<any []>([]);
    const [animals, setAnimals] = useState<any []>([]);

    const [subProplocations, setSubPropLocations] = useState<any []>([]);
    const [propLocations, setPropLocations] = useState<any []>([]);

    const [subAnimalLocations, setSubAnimalLocations] = useState<any []>([]);
    const [animalLocations, setAnimalLocations] = useState<any []>([]);

    const [mappedGrid, setMappedGrid] = useState<any []>([]);

    const {showCoords, showGrid} = useSelector(selectAdminOptionsState);


    useEffect(()=>{
      (async () => {
        try{
       let {data: propData} = await axios('https://localhost:8000/api/props?page=1')
       setProps(propData["hydra:member"]);
          
       let {data: animalData} = await axios('https://localhost:8000/api/animals?page=1')
       setAnimals(animalData["hydra:member"]);

       let {data: subPropLocationsdata} = await axios('https://localhost:8000/api/worldmap_props?page=1')
       setSubPropLocations(subPropLocationsdata["hydra:member"]);
 
       let {data: locationAnimalData} = await axios('https://localhost:8000/api/worldmap_animals?page=1')
       setSubAnimalLocations(locationAnimalData["hydra:member"]);

      }catch(e){console.log(e)}
     })()
     },[])

     useEffect(()=> {

        //Get the id of the subject prop on the location, next get the name of the prop and set proplocations
        const propLocationsCompact = subProplocations.map(({id, wmppPosX, wmppPosY,wmppPrpId}:any)=> ({pId:id, wmppPosX, wmppPosY, propId:wmppPrpId.id}))
        setPropLocations(propLocationsCompact.map((v:any)=> ({...v,name: props.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.prpName : t,"")})))

        //Get the id of the subject animal on the location, next get the name of the animal and set animallocations
        const animalLocationsCompact = subAnimalLocations.map(({id, wmpaPosX, wmpaPosY,animal}:any)=> ({aId:id, wmppPosX:wmpaPosX, wmppPosY:wmpaPosY, propId:animal.id}))

        //Made it so that props and animals come together in pitstop, which rolls out in mappedgrid for show
        setAnimalLocations(animalLocationsCompact.map((v:any)=> ({...v,name: animals.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.AnlName : t,"")})))

        const pitstop = [...animalLocations, ...propLocations];

        const gamegrid = new Array(20).fill(new Array(30).fill(""))

        setMappedGrid(gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i, entity: ""}))))
        const test = gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i, entity: ""})));

        setMappedGrid(test.map((v:any)=> v.map((subv:any) => ({...subv,entity: pitstop.reduce((t:any,subsubv:any)=> subv.gridX === subsubv.wmppPosX && subv.gridY === subsubv.wmppPosY ? subsubv.name : t,"")}))));

     },[props, animals, subProplocations, subAnimalLocations])

     
  return (
    <section className="gamegrid">
      {mappedGrid.length > 0 && mappedGrid.map((v:gridcoords [])=> v.map(({gridX, gridY,entity}:gridcoords)=>
      <div key={`${gridX} + ${gridY}`} id={`x${gridX}y${gridY}`} className={showGrid ? `gamegrid__cell-show ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`:`gamegrid__cell ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`}>{showCoords && `X:${gridX}, Y:${gridY}`}</div>))}
    </section>
  )
}

export default Grid
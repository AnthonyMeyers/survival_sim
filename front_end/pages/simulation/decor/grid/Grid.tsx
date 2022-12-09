import { selectAdminOptionsState } from "../../../../data/adminOptions";
import { setLoaded } from "../../../../data/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import axios from 'axios';
import {AppState} from "../../../../data/store"

interface gridcoords {
  gridX:number,
  gridY: number,
  entity:string
}

const Grid = () => {

    const dispatch = useDispatch();
    const isLoaded = useSelector((s:AppState) => s.loadSlice.isLoading)

    const [ApisLoaded, setApisLoaded] = useState<boolean>(false);
    const [props, setProps] = useState<any []>([]);
    const [animals, setAnimals] = useState<any []>([]);

    const [subProplocations, setSubPropLocations] = useState<any []>([]);
    const [subAnimalLocations, setSubAnimalLocations] = useState<any []>([]);
    const [mappedGrid, setMappedGrid] = useState<any []>([]);
    const {showCoords, showGrid} = useSelector(selectAdminOptionsState);


    useEffect(()=>{
      (async () => {

        const promises = 
        [await axios('https://localhost:8000/api/props?page=1'),
        await axios('https://localhost:8000/api/animals?page=1'),
        await axios('https://localhost:8000/api/worldmap_props?page=1'),
        await axios('https://localhost:8000/api/worldmap_animals?page=1')]

        const data  = await Promise.all(promises)
        setProps(data[0].data["hydra:member"])
        setAnimals(data[1].data["hydra:member"]);
        setSubPropLocations(data[2].data["hydra:member"]);
        setSubAnimalLocations(data[3].data["hydra:member"]);

        setApisLoaded(true)

     })()
     
     },[])

     useEffect(()=> {

       if(ApisLoaded){
        //Get the id of the subject prop on the location, next get the name of the prop and set proplocations
        const propLocationsCompact = subProplocations.map(({id, wmppPosX, wmppPosY,wmppPrpId}:any)=> ({pId:id, wmppPosX, wmppPosY, propId:wmppPrpId.id}))
        const propLocationsLocal = (propLocationsCompact.map((v:any)=> ({...v,name: props.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.prpName : t,"")})))
        
        //Get the id of the subject animal on the location, next get the name of the animal and set animallocations
        const animalLocationsCompact = subAnimalLocations.map(({id, wmpaPosX, wmpaPosY,animal}:any)=> ({aId:id, wmppPosX:wmpaPosX, wmppPosY:wmpaPosY, propId:animal.id}))
        
        //Made it so that props and animals come together in pitstop, which rolls out in mappedgrid for show
        const AnimalLocationsLocal = (animalLocationsCompact.map((v:any)=> ({...v,name: animals.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.AnlName : t,"")})))
        
        //Gather non player entity locations
        const entities = [...AnimalLocationsLocal, ...propLocationsLocal];

        //Make an empty array for gamegrid
        const gamegrid = new Array(20).fill(new Array(30).fill(""))
        
        //Fill gamegrid entity with empty coordinates and empty entity
        setMappedGrid(gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i, entity: ""}))))
        const test = gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i, entity: ""})));

        //Merge all the data
        const makeMappedGrid = test.map((v:any)=> v.map((subv:any) => ({...subv,entity: entities.reduce((t:any,subsubv:any)=> subv.gridX === subsubv.wmppPosX && subv.gridY === subsubv.wmppPosY ? subsubv.name : t,"")})))
        
        //Pass the data to mappedGrid
        setMappedGrid(makeMappedGrid)

        dispatch(setLoaded())
      }
     },[ApisLoaded])


  return (
    <section className="gamegrid">
      {mappedGrid.length > 0 && mappedGrid.map((v:gridcoords [])=> v.map(({gridX, gridY,entity}:gridcoords)=>
      <div key={`${gridX} + ${gridY}`} id={`x${gridX}y${gridY}`} className={showGrid ? `gamegrid__cell-show ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`:`gamegrid__cell ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`}>{showCoords && `X:${gridX}, Y:${gridY}`}</div>))}
    </section>
  )
}

export default Grid
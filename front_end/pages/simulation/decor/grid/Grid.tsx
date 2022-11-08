import { selectAdminOptionsState } from "../../../../data/adminOptions";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import axios from 'axios';

interface gridcoords {
  gridX:number,
  gridY: number,
  entity:string
}

const Grid = () => {
    const [props, setProps] = useState<any []>([]);
    const [locations, setLocations] = useState<any []>([]);
    const [propLocations, setPropLocations] = useState<any []>([]);
    const [mappedGrid, setMappedGrid] = useState<any []>([]);


    const {showCoords, showGrid} = useSelector(selectAdminOptionsState);

    useEffect(()=>{
      (async () => {
       let {data: propData} = await axios('https://localhost:8000/api/props?page=1')
       setProps(propData["hydra:member"]);
       let {data: locationData} = await axios('https://localhost:8000/api/worldmap_props?page=1')
       setLocations(locationData["hydra:member"]);
     })()
     },[])

     useEffect(()=> {
      if(locations.length > 0 && props.length > 0)
      {
        const propLocationsCompact = locations.map(({id, wmppPosX, wmppPosY,wmppPrpId}:any)=> ({id, wmppPosX, wmppPosY, propId:wmppPrpId.id}))
        setPropLocations(propLocationsCompact.map((v:any)=> ({...v,name: props.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.prpName : t,"")})))
        
        const gamegrid = new Array(20).fill(new Array(30).fill(""))
        setMappedGrid(gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i, entity: ""}))))
        const test = gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i, entity: ""})));
        /*console.log(propLocations);
        console.log(test.map((v:any)=> v.map((subv:any) => ({...subv,entity: propLocations.reduce((t:any,subsubv:any)=> subv.gridX === subsubv.wmppPosX && subv.gridY === subsubv.wmppPosY ? subsubv.name : t,"")}))));*/
        setMappedGrid(test.map((v:any)=> v.map((subv:any) => ({...subv,entity: propLocations.reduce((t:any,subsubv:any)=> subv.gridX === subsubv.wmppPosX && subv.gridY === subsubv.wmppPosY ? subsubv.name : t,"")}))))
      }


     },[locations, props])

  return (
    <section className="gamegrid">
      {mappedGrid.length > 0 && mappedGrid.map((v:gridcoords [])=> v.map(({gridX, gridY,entity}:gridcoords)=>
      <div key={`${gridX} + ${gridY}`} id={`x${gridX}y${gridY}`} className={showGrid ? `gamegrid__cell-show ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`:`gamegrid__cell ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`}>{showCoords && `X:${gridX}, Y:${gridY}`}</div>))}
    </section>
  )
}

export default Grid
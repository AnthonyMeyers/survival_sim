import { selectAdminOptionsState } from "../../../../data/adminOptions";
import { setLoaded } from "../../../../data/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import {
  useGetAnimalsQuery,
  useGetPropsQuery,
  useGetWorldmapPropsLocationsQuery,
  useGetWorldmapAnimalLocationsQuery,
  WorldmapProps

} from "../../../../data/simulationapi"

interface gridcoords {
  gridX:number,
  gridY: number,
  entity:string
}

const Grid = () => {

    const dispatch = useDispatch();
    
    const [mappedGrid, setMappedGrid] = useState<any []>([]);
    const {showCoords, showGrid} = useSelector(selectAdminOptionsState);

    const {data: animalData, isLoading: animalLoading, isError: animalError, isSuccess : animalSuccess} = useGetAnimalsQuery()
    const {data: propData, isLoading: propLoading, isError: propError, isSuccess: propSuccess} = useGetPropsQuery()
    const {data: worldmapProps , isLoading: worldmapPropsLoading, isError: worldmapPropsError, isSuccess: worldmapPropsSuccess} = useGetWorldmapPropsLocationsQuery()
    const {data: worldmapAnimals, isLoading: worldmapAnimalsLoading, isError: worldmapAnimalsError, isSuccess: worldmapAnimalsSuccess} = useGetWorldmapAnimalLocationsQuery()

     useEffect(()=> {
      
       if(worldmapPropsSuccess && worldmapAnimalsSuccess && propSuccess && animalSuccess){

        //Get the id of the subject prop on the location, next get the name of the prop and set proplocations
        const propLocationsCompact = worldmapProps?.map(({id, wmppPosX, wmppPosY,wmppPrpId}:any)=> ({pId:id, wmppPosX, wmppPosY, propId:wmppPrpId.id}))
        const propLocationsLocal = (propLocationsCompact?.map((v:any)=> ({...v,name: propData?.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.prpName : t,"")})))

        //Get the id of the subject animal on the location, next get the name of the animal and set animallocations
        const animalLocationsCompact = worldmapAnimals?.map(({id, wmpaPosX, wmpaPosY,animal}:any)=> ({aId:id, wmppPosX:wmpaPosX, wmppPosY:wmpaPosY, propId:animal.id}))
        
        //Made it so that props and animals come together in pitstop, which rolls out in mappedgrid for show
        const AnimalLocationsLocal = (animalLocationsCompact?.map((v:any)=> ({...v,name: animalData?.reduce((t:any,subv:any)=> v.propId === subv.id ? subv.AnlName : t,"")}))) 

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
     },[worldmapAnimalsSuccess, worldmapAnimalsSuccess,propSuccess,animalSuccess])


  return (
    <section className="gamegrid">
      {mappedGrid.length > 0 && mappedGrid.map((v:gridcoords [])=> v.map(({gridX, gridY,entity}:gridcoords)=>
      <div key={`${gridX} + ${gridY}`} id={`x${gridX}y${gridY}`} className={showGrid ? `gamegrid__cell-show ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`:`gamegrid__cell ${entity.length > 0 ? 'gamegrid__cell'+"-"+entity : ""}`}>{showCoords && `X:${gridX}, Y:${gridY}`}</div>))}
    </section>
  )
}

export default Grid
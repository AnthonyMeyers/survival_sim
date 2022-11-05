import { selectAdminOptionsState } from "../../../../data/adminOptions";
import { useDispatch, useSelector } from "react-redux";

interface gridcoords {
  gridX:number,
  gridY: number
}


const Grid = () => {
    const gamegrid = new Array(20).fill(new Array(30).fill(""))
    const mappedGamegrid = gamegrid.map((arr: [],i: number) => arr.map((subv: [],subi: number)=> ({gridX: subi, gridY: i})))
    const {showCoords} = useSelector(selectAdminOptionsState);
  return (
    <section className="gamegrid">
      {mappedGamegrid && mappedGamegrid.map((v:gridcoords [])=> v.map(({gridX, gridY}:gridcoords)=><div key={`${gridX} + ${gridY}`} className="gamegrid__cell">{showCoords && `X:${gridX}, Y:${gridY}`}</div>))}


    </section>
  )
}

export default Grid

        /*gamegrid && gamegrid.map((v,i) => <div key={i} className="gamegrid__cell"></div>)*/

import { selectAdminOptionsState, setShowGrid, setShowCoords } from "../../../data/adminOptions";
import { useDispatch, useSelector } from "react-redux";

const Toolbar = () => {

    const dispatch = useDispatch();

  return (
    <div className="toolbar">
        <button className="toolbar__button" onClick={()=>dispatch(setShowGrid())}>Show grid</button>
        <button className="toolbar__button" onClick={()=>dispatch(setShowCoords())}>Show coordinates</button>
    </div>
  )
}

export default Toolbar
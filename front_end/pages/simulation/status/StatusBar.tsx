import { selectAdminOptionsState, setShowGrid, setShowCoords } from "../../../data/adminOptions";
import { useDispatch, useSelector } from "react-redux";

const StatusBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="statusbar">StatusBar<button onClick={()=>dispatch(setShowGrid())}>Show grid</button>
    <button onClick={()=>dispatch(setShowCoords())}>Show coordinates</button></div>
  )
}

export default StatusBar
import { selectAdminOptionsState, setShowGrid } from "../../../data/adminOptions";
import { useDispatch, useSelector } from "react-redux";

const StatusBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="statusbar">StatusBar<button onClick={()=>dispatch(setShowGrid())}>Show grid</button></div>
  )
}

export default StatusBar
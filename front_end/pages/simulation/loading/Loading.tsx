import {  useSelector } from "react-redux";
import { AppState } from "../../../data/store";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

const Loading = () => {
    const isLoading = useSelector((s: AppState) => s.loadSlice.isLoading)
    const [removeLoaded, setRemoveLoaded] = useState<boolean>(false);

useEffect(()=>{

  if(isLoading)
  {
    const loadingFinishedTimeout = setTimeout(()=>setRemoveLoaded(true),1500)
    return clearTimeout(loadingFinishedTimeout)
  }

},[isLoading])

  return  (
      <>
      
      {!removeLoaded && !isLoading && <p className="loading loading-busy">Loading game</p>}
      {!removeLoaded && isLoading && <p className="loading loading_done">Done</p>}
      
      </>
  )
   
  
}

export default Loading
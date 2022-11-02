import Decor from "./decor/Decor";
import StatusBar from "./status/StatusBar";


const index = () => {
  return (
    <>
    <div className="container">
      <StatusBar></StatusBar>
      <Decor></Decor>
    </div>

    </>
  )
}

export default index
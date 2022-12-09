import Decor from "./decor/Decor";
import StatusBar from "./status/StatusBar";
import Toolbar from "./tools/Toolbar";
import Loading from "./loading/Loading";

const index = () => {
  return (
    <>
    <div className="container">
      <Loading/>
      <StatusBar></StatusBar>
      <Decor></Decor>
      <Toolbar></Toolbar>
    </div>

    </>
  )
}

export default index
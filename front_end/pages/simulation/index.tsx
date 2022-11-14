import Decor from "./decor/Decor";
import StatusBar from "./status/StatusBar";
import Toolbar from "./tools/Toolbar";

const index = () => {
  return (
    <>
    <div className="container">
      <StatusBar></StatusBar>
      <Decor></Decor>
      <Toolbar></Toolbar>
    </div>

    </>
  )
}

export default index
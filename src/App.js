
import React from "react";
import Appbar from "./component/Appbar";
import { Banner } from "./component/Banner";
import Menu from "./component/Menu";
import PickoftheWeek from "./component/PickoftheWeek";
import Comments from "./component/Comments";

const App =()=>{
  return (
    <>
      <Appbar />
      <Banner/>
      <Menu/>
      <PickoftheWeek/>
      <Comments/>
      <div className="text-center my-3 text-primary small">Copyright 2023</div>
    </>
  );
}
export default App
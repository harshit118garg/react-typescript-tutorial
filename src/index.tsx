import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Apps
import App1 from "./Apps/App1";
import App2 from "./Apps/App2";
import App3 from "./Apps/App3";

ReactDOM.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
  document.getElementById("root")
);

/* 
  App1 => Basic Props like string, Number, List, Object
          Advance Props like conditional Props, optional props, ReacrNode

  App2 => Event Props handling onClick and onChange
*/

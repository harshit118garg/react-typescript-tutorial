import React from "react";
import LoggedIn from "../useState/LoggedIn";
import User from "../useState/User";
import User2 from "../useState/User2";

const App4 = () => {
  return (
    <div>
      <h2 className="display-2">Use State</h2>
      <br />
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <User2 />
    </div>
  );
};

export default App4;

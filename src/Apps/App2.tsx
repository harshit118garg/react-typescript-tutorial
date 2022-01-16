import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components2/Button";
import Input from "../components2/Input";

const App2 = () => {
  return (
    <div>
      <h2 className="display-4 text-center">Hello World!</h2>
      <Input
        value=""
        handleChange={(e) => {
          console.log(`input field logged to the console ${e}`);
        }}
      />
      <hr />
      <Button
        handleClick={(e, id) => {
          console.log("logged in to the console", e);
          toast.warn("Wow so easy!", { position: "top-right" });
          toast.info(id, { position: "top-left" });
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default App2;

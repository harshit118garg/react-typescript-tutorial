import React from "react";
import Container from "../styleComponents/Container";
import Container2 from "../styleComponents/Container2";

const App3 = () => {
  return (
    <div>
      <Container styles={{ border: "5px solid red", padding: "1.25rem" }} />
      <br />
      <Container2 classNames="container bg-warning text-dark col-md-6 p-2" />
    </div>
  );
};

export default App3;

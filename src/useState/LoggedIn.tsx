import React, { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // type inference, typescript automatically judges the type of value passed in

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-content-center">
          <button
            onClick={handleLogIn}
            className="btn btn-primary col-md-4 btn-lg"
          >
            Logged In
          </button>
          <button
            onClick={handleLogOut}
            className="btn btn-primary col-md-4 btn-lg mx-3"
          >
            Logged Out
          </button>
          <h3 className="display-2">
            User is {isLoggedIn ? "Logged In" : "Logged Out"}
          </h3>
        </div>
      </div>
    </>
  );
}

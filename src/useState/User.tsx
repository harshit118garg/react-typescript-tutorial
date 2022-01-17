import React, { useState } from "react";

// initial value is known only at future point of time
type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null); // inferencing that useState can be of type null or of type AuthUser in the angular brackets "<>"

  const handleLogIn = () => {
    setUser({
      name: "Harshit",
      email: "harshit@temp.mail",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <>
      <h2 className="display-2">Use State Future Value</h2>
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
          <h3 className="display-2">User Name is {user?.name}</h3>
          <h3 className="display-2">User Email is {user?.email}</h3>
        </div>
      </div>
    </>
  );
}

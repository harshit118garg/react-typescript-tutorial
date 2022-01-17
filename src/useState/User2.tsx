import React, { useState } from "react";

// initial value is known only at future point of time

// lets assume that user will never be null again.
type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // implying that user will not be null again, we need not to check for the user property
  // type assertion

  const handleLogIn = () => {
    setUser({
      name: "Garg",
      email: "garg@temp.mail",
    });
  };
  return (
    <>
      <h2 className="display-2">Use State Future Value</h2>
      <div className="container">
        <div className="row d-flex justify-content-center align-content-center">
          <button
            onClick={handleLogIn}
            className="btn btn-primary col-md-12 btn-lg"
          >
            Logged In
          </button>
          <h3 className="display-2">User Name is {user.name}</h3>
          <h3 className="display-2">User Email is {user.email}</h3>
        </div>
      </div>
    </>
  );
}

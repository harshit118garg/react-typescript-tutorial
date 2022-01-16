import React from "react";

type GreetProps = {
  // passing props
  name: string; // need to structure the type of props first
  num?: number; // only then props can be used
  isLoggedIn: boolean; // propName?: it means optional propType
};

export const Greet = (props: GreetProps) => {
  // {props : propType}
  const { name, num = 0, isLoggedIn } = props;
  return (
    <>
      {!isLoggedIn ? (
        <>
          <h2 className="display-2 text-warning">User is not logged in</h2>
        </>
      ) : (
        <>
          <h2 className="display-2 text-success">User logged in successful</h2>
          <h2 className="display-3">Welcome {name}!</h2>
          <h4 className="display-5">
            You have <span className="text-danger">{num}</span> unread messages
          </h4>
        </>
      )}
    </>
  );
};

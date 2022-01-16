import React from "react";

type PersonProps = {
  // object props
  name: {
    fName: string;
    lName: string;
  };
};

const Person = (props: PersonProps) => {
  const { fName, lName } = props.name;
  return (
    <>
      <h2 className="display-1 text-secondary">
        {fName} {lName} is Batman
      </h2>
    </>
  );
};

export default Person;

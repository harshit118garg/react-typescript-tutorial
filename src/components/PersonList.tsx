import React from "react";
type PersonListProps = {
  list: {               // working with arrays
    fName: string;
    lName: string;
    identity: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <>
      <ul className="list-group">
        {props.list.map((name) => {
          const { fName, lName, identity } = name;
          return (
            <li className="list-group-item list-group-item-danger text-dark text-uppercase fs-2">
              {fName} {lName} is {identity}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PersonList;

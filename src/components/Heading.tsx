import React from "react";

type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return (
    <>
      <h2 className="display-4 fst-italic">{props.children}</h2>
    </>
  );
}

export default Heading;

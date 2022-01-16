import React from "react";

type OscarProps = {
  children: React.ReactNode;
};

function Oscar(props: OscarProps) {
  return (
    <>
      <h4 className="display-3">{props.children}</h4>
    </>
  );
}

export default Oscar;

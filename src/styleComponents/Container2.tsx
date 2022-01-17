import React from "react";

type Container2Props = {
  classNames?: string; // passing className as props
};

export default function Container2(props: Container2Props) {
  return (
    <>
      <div className={props.classNames}>
        <h2 className="display-2">ClassName passed as props</h2>
      </div>
    </>
  );
}

import React from "react";

type StatusProps = {
  status: "Loading" | "Success" | "Error"; //  passing status as prop
}; //  status can only be Loading or Success or Error

export default function Status(props: StatusProps) {
  const { status } = props;

  /* conditional rendering */
  let message;
  if (status === "Loading") {
    message = "Loading";
  } else if (status === "Success") {
    message = "Data Fetched Successfully!";
  } else if (status === "Error") {
    message = "Error in fetching data";
  }

  return (
    <>
      <h2 className="display-5 text-danger">{message}</h2>
    </>
  );
}

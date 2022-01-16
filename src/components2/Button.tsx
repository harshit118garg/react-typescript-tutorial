import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  return (
    <div className="container">
      <button
        className="btn btn-primary fs-3 fw-bolder col-md-6 col-sm-8"
        onClick={(e) => props.handleClick(e, 4)}
      >
        Click
      </button>
    </div>
  );
}

export default Button;

import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div className="container">
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          value={props.value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Input;

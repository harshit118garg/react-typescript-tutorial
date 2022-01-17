import React from "react";

type ContainerProps = {
  styles: React.CSSProperties; // Passing styles as props
};

export default function Container(props: ContainerProps) {
  return (
    <div style={props.styles}>
      <h2 className="display-3">Style passed as props</h2>
    </div>
  );
}

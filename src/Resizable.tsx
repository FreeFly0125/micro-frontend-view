import React, { useState } from "react";
import { Resizable } from "re-resizable";

export const ResizeElement: React.FC = () => {
  const [state, setState] = useState({ width: 320, height: 200 });
  return (
    <Resizable
      style={{ border: "1px solid black" }}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
        console.log ("My Log: ", direction, ref, d);
        setState({
          width: state.width + d.width,
          height: state.height + d.height,
        });
      }}
    >
      Sample with size
    </Resizable>
  );
};

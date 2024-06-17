import React, { CSSProperties, useState } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

const MyDiv = styled.div`
  background: rgb(255, 0, 0);
  border: rgb(0, 255, 0);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const circle_indicator: CSSProperties = {
  width: "15px",
  height: "15px",
  backgroundColor: "white",
  border: "1px solid magenta",
  borderRadius: "50%",
  zIndex: 53,
  position: "absolute",
};

const rectangular_indicator: CSSProperties = {
  borderRadius: "35%",
  backgroundColor: "white",
  border: "1px solid magenta",
  zIndex: 53,
  position: "absolute",
};

const rectangular_horizontal: CSSProperties = {
  width: "25px",
  height: "10px",
  left: "50%",
  transform: "translateX(-50%)",
};

const rectangular_vertical: CSSProperties = {
  width: "10px",
  height: "25px",
  top: "50%",
  transform: "translateY(-50%)",
};

export const ResizeElement: React.FC = () => {
  return (
    <Rnd
      className="ResizeElement"
      size={{ width: "max-content", height: "max-content" }}
      enableResizing={true}
      lockAspectRatio={false}
      resizeHandleStyles={{
        topLeft: { ...circle_indicator, left: "-7px" },
        topRight: { ...circle_indicator, right: "-7px" },
        bottomLeft: { ...circle_indicator, left: "-7px" },
        bottomRight: { ...circle_indicator, right: "-7px" },
        top: { ...rectangular_indicator, ...rectangular_horizontal },
        bottom: {
          ...rectangular_indicator,
          ...rectangular_horizontal,
        },
        left: { ...rectangular_indicator, ...rectangular_vertical },
        right: { ...rectangular_indicator, ...rectangular_vertical },
      }}
    >
      <MyDiv className="InnerDiv">
        <span>Hello, World</span>
      </MyDiv>
    </Rnd>
  );
};

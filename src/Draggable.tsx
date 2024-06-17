import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const MyDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: darkgreen;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
`;

export const DragElement: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e: any, data: any) => {
    setPosition({ x: data.x, y: data.y });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div>
      <h1>Draggable Element</h1>
      <div style={{ margin: "10px" }}>
        <MyButton onClick={resetPosition}>Reset Position</MyButton>
      </div>
      <div>
        <Draggable position={position} onDrag={updatePosition}>
          <MyDiv>Hello World!</MyDiv>
        </Draggable>
      </div>
    </div>
  );
};

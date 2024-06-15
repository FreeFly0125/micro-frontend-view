import React from "react";
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
  return (
    <div>
      <h1>Draggable Element</h1>
      <div style={{ margin: "10px" }}>
        <MyButton>Reset Position</MyButton>
      </div>
      <div>
        <Draggable>
          <MyDiv>Hello World!</MyDiv>
        </Draggable>
      </div>
    </div>
  );
};

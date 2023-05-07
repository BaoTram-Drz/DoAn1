import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled,{css} from "styled-components";

const TextBox = styled.div`
  width: 100%;
  height: 50px;
  margin: auto;
  padding: 12px 0px;
  font: normal 400 2rem "Roboto";
  color: #ffc24b;
  text-align: center;
  border: 2px dashed #ffb3ae;
  border-radius: 50px;
  ${({ isOver }) =>
    isOver &&
    css`
      background-color: lightblue;
    `}
  ${({ isNotOver }) =>
    isNotOver &&
    css`
      background-color: white;
    `}
`;

const Game3Drop = () => {
  const [droppedText, setDroppedText] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'button',
    drop: (item) => {
      if(droppedText == null)
        setDroppedText(item.text);
      else setDroppedText(null);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleReset = () => {
    setDroppedText(null);
  };

  return (
    <TextBox isOver={isOver} ref={drop}  onClick={handleReset}>
     {droppedText}
    </TextBox>
    
  );
};

export default Game3Drop;

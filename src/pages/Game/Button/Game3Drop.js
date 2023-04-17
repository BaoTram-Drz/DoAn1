import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled,{css} from "styled-components";

const TextBox = styled.div`
  width: 80%;
  height: 50px;
  margin: auto;
  padding: 12px 24px;
  font: normal 400 2rem "Roboto";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-left: 3px dashed #0e606b;
  border-right: 3px dashed #0e606b;
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

const Game3Drop = ({ onDrop, resetDraggedItems }) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'button',
    drop: (item) => {
      onDrop(item.id);
      setDroppedItems((prev) => [...prev, { id: item.id, text: item.text }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleReset = () => {
    const droppedItemIds = droppedItems.map((item) => item.id);
    resetDraggedItems(droppedItemIds);
    setDroppedItems([]);
  };

  return (
    <TextBox isOver={isOver} isNotOver={!isOver} ref={drop} onClick={handleReset}>
      {droppedItems.map((item) => (
        <span key={item.id}>{item.text}</span>
      ))}
    </TextBox>
  );
};

export default Game3Drop;

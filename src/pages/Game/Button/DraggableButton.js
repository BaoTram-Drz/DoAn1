import React from 'react';
import styled, { css } from 'styled-components';
import { useDrag } from 'react-dnd';

const StyledButton = styled.button`
  width: 100%;
  padding: 5px 24px;
  font: normal 400 2rem "Roboto";
  background-color: white;
  border: 3px solid #0e606b;
  border-radius: 50px;
  cursor: move;
  ${({ isDragging }) =>
    isDragging &&
    css`
      opacity: 0.5;
    `}
  ${({ isNotDragging }) =>
    isNotDragging &&
    css`
      opacity: 1;
    `}
`;
const DraggableButton = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'button',
    item: { id, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledButton ref={drag} isDragging={isDragging} isNotDragging={!isDragging}>
        {text}
    </StyledButton>
  );
};

export default DraggableButton;

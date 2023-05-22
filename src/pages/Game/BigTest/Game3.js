import React, { useState } from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableButton from "./Button/DraggableButton";
import Game3Drop from "./Button/Game3Drop";

const Answers = styled.p`
  text-align: center;
  padding: 0px 24px;
  font: normal 400 28px "Autour One";
`;

const TablesContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto 5% auto;  
`;
const TableDiv= styled.table`
  width: 24%;
  padding: 5px 24px;
  border: 3px dashed #0e606b;
  border-radius: 50px;
`;

const TableCell = styled.td`
  width:100%;
  padding: 5px 0px;
  text-align: center;
  font: normal 400 28px "Roboto";
  color: #0e606b;
  border-bottom: 3px dashed #1697a6;
`;


const Game3 = ({ data }) => {
  const [draggedItems, setDraggedItems] = useState([]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleDrop = (id) => {
    setDraggedItems((prev) => [...prev, id]);
  };

  const resetDraggedItems = (resetItems) => {
    setDraggedItems((prev) => prev.filter((item) => !resetItems.includes(item)));
  };



  const textOptions = data.textOptions;
  const answerOptions = data.answerOptions;

  return (
    <>
      <Answers>{data.question}</Answers>
      <DndProvider backend={HTML5Backend}>
        <TablesContainer>
          {textOptions.map((item, index) => (
            <TableDiv key={index}>              
                <tr>
                  <TableCell><>{item.text}</></TableCell>                  
                </tr>
                <tr>
                  <td>
                    <Game3Drop
                      onDrop={handleDrop}
                      resetDraggedItems={resetDraggedItems}
                    />
                  </td>
                </tr>
            </TableDiv>
          ))}
        </TablesContainer>
        <TablesContainer>
          {answerOptions.map((item) => {
            if (draggedItems.includes(item.id)) {
              return null;
            }
            return (
              <DraggableButton key={item.id} id={item.id} text={item.text} />
            );
          })}
        </TablesContainer>
      </DndProvider>
    </>
  );
};

export default Game3;
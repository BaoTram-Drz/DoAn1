import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableButton from './Button/DraggableButton';
import Game3Drop from './Button/Game3Drop';

const Answers = styled.p`
  text-align: center;
  padding: 0px 24px;
  font: normal 400 28px 'Autour One';
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  
  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const TablesContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto 5% auto;
  @media (max-width: 540px) {
    width: 100%;
  }
`;
const TableDiv = styled.table`
  width: 24%;  
  margin: 1%;
  padding: 5px 24px;
  border: 3px dashed #0e606b;
  border-radius: 50px;
  
  @media (max-width: 540px) {
    width: 100%;
  }
  
`;
const TableRow = styled.div`
  width: 80%;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
`;
const TableCell = styled.td`
  width: 100%;
  padding: 5px 0px;
  text-align: center;
  font: normal 400 28px 'Roboto';
  color: #0e606b;
  border-bottom: 3px dashed #1697a6;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  
  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const Game3 = ({ data, onSelectAnswer }) => {
  const [draggedItems, setDraggedItems] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const tableStrings = JSON.stringify(tableData);
    onSelectAnswer(tableStrings);
  }, [tableData, onSelectAnswer]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleDrop = (id, text) => {
    setDraggedItems((prev) => [...prev, id]);
    setTableData((prev) => [...prev, { id, text }]);
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
          <TableRow>
            {textOptions.map((item, index) => (
              <TableDiv key={index}>
                <tbody>                
                    <TableCell>{item.text}</TableCell>                
                  <tr>
                    <td>
                      <Game3Drop
                        onDrop={(droppedText) => handleDrop(item.id, droppedText)}
                        resetDraggedItems={resetDraggedItems}
                      />
                    </td>
                  </tr>
                </tbody>
              </TableDiv>
            ))}
          </TableRow>
        </TablesContainer>
        <TablesContainer>
          <TableRow>
            {answerOptions.map((item) => {
              if (draggedItems.includes(item.id)) {
                return null;
              }
              return <DraggableButton key={item.id} id={item.id} text={item.text} />;
            })}
          </TableRow>
        </TablesContainer>
      </DndProvider>
    </>
  );
};

export default Game3;

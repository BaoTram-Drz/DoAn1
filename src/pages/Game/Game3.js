import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableButton from './Button/DraggableButton'
import DropZone from './Button/DropZone'


const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px 'Autour One';
`;
const ButtonsContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3% auto 5% auto;
`;
const TableWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableRow = styled.tr`
  background-color: white;
`;
const TableCell = styled.div`
    margin: 2% 10%;  
    padding: 5px 24px;
    text-align: center;
    font: normal 400 28px 'Autour One';
    color: #0E606B;
    border: 2px dashed #0e606b;
    border-radius: 50px;
`;
const Game3 = ({data}) => {

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
          <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
                {textOptions.map((item) => {
                    if (textOptions.includes(item.id)) {
                    return null;
                    }
                    return (
                        <td>
                            <TableCell>
                                {item.text}
                            </TableCell>
                            <TableCell>
                            <DropZone onDrop={handleDrop}  resetDraggedItems={resetDraggedItems}/>
                            </TableCell>
                        </td>                        
                    );
                })}
            </TableRow>            
          </tbody>
        </Table>
      </TableWrapper>
            
            <ButtonsContainer>
              {answerOptions.map((item) => {
                if (draggedItems.includes(item.id)) {
                  return null;
                }
                return (
                  <DraggableButton key={item.id} id={item.id} text={item.text} />
                );
              })}
            </ButtonsContainer>
          </DndProvider>
        </>
      );
};

export default Game3;

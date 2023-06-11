import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import A from './image/A.png'
import B from './image/B.png'
import C from './image/C.png'
import D from './image/D.png'

const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px 'Autour One';
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
    padding: 10px 24px 5px 24px;
    border: 2px dashed #0e606b;
    border-radius: 50px;
    cursor: pointer;
    
    &:hover {
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
    ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    `}
`;
const CellText = styled.span`
    margin-top: 50%;
    font: normal 400 28px 'Roboto', sans-serif;
    color: #0E606B;
    text-align: center;
`;
const ImageAns = styled.img`
    width: 40px;
    height: 40px;
    margin: auto 10px;
    text-align: center;
`;

const Game1 = ({ data, onSelectAnswer }) => {
  const [activeId, setActiveId] = useState(null);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleClick = (answerId) => {
    setActiveId(answerId);
    onSelectAnswer(answerId);
  };

  return (
    <>
      <Answers>{data.question}</Answers>
      <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
              <td>
                <TableCell 
                  onClick={() => handleClick(data.answerOptions[0].id)}
                  isActive={activeId === data.answerOptions[0].id}
                >
                  <ImageAns src={A} alt="A" /> 
                    <CellText>{data.answerOptions[0].text}</CellText>
                </TableCell>
              </td>
              <td>
                <TableCell 
                  onClick={() => handleClick(data.answerOptions[1].id)}
                  isActive={activeId === data.answerOptions[1].id}
                >
                  <ImageAns src={B} alt="B" /> 
                    <CellText>{data.answerOptions[1].text}</CellText>
                </TableCell>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <TableCell 
                  onClick={() => handleClick(data.answerOptions[2].id)}
                  isActive={activeId === data.answerOptions[2].id}
                >
                  <ImageAns src={C} alt="C" /> 
                    <CellText>{data.answerOptions[2].text}</CellText>
                </TableCell>
              </td>
              <td>
                <TableCell 
                  onClick={() => handleClick(data.answerOptions[3].id)}
                  isActive={activeId === data.answerOptions[3].id}
                >
                  <ImageAns src={D} alt="D" /> 
                    <CellText>{data.answerOptions[3].text}</CellText>
                </TableCell>
              </td>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
};

export default Game1;

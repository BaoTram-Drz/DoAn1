import React, { useState} from "react";
import styled from "styled-components";

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
    width: 90%;
    margin: 2% 10%;  
    padding: 5px 24px;
    text-align: center;
    font: normal 400 28px 'Roboto';
    color: #0E606B;
    border: 2px dashed #0e606b;
    border-radius: 50px;
`;

const InputCell = styled.input`
    width: 50%;
    margin: 2% 20%;  
    padding: 5px 24px;
    text-align: center;
    font: normal 400 28px 'Roboto';
    color: #0E606B;
    border: 2px dashed #0e606b;
    border-radius: 50px;
`;

const ImageAns = styled.img`
    width: 50%;
    height: 50%;
`;

const Game2 = ({data, onSelectAnswer}) => {
    
  if (!data) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (event) => {
    onSelectAnswer(event.target.value);
  };
  
  return (
    <>
      <Answers>{data.question}</Answers>
      <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
              <td>
                <TableCell>
                  <ImageAns src={data.image} alt="A" /> 
                </TableCell>
              </td>
              <td>
                    <InputCell placeholder="........." onChange={handleInputChange} />               
              </td>
            </TableRow>
            <TableRow>
              <td>
                <TableCell>
                    {data.vietnamesePhrase}
                </TableCell>
              </td>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>     
    </>
   
  );
};

export default Game2;

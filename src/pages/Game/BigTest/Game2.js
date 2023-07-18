import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Answers = styled.p`
  text-align: center;
  padding: 0px 24px;
  font: normal 400 28px 'Autour One';

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 912px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
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
const TableWrapper = styled.div`
  width: 60%;
  margin: auto;

  @media (max-width: 912px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  background-color: white;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const TableCell = styled.div`
  width: 90%;
  margin: 2% auto;
  padding: 5px 24px;
  text-align: center;
  font: normal 400 28px 'Roboto';
  color: #0E606B;
  border: 2px dashed #0e606b;
  border-radius: 50px;

  @media (max-width: 900px) {
    font-size: 1.5rem;
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 80%;
    font-size: 1rem;
  }
`;

const InputCell = styled.input`
  width: 50%;
  margin: 2% 20%;
  padding: 5px 24px;
  text-align: center;
  font: normal 400 2rem 'Roboto';
  color: #0E606B;
  border: 2px dashed #0e606b;
  border-radius: 50px;

  @media (max-width: 900px) {
    margin: 2% auto;
    font-size: 2rem;
    width: 60%;
  }

  @media (max-width: 700px) {
    margin: 2% 3%;
    font-size: 1rem;
    width: 80%;
  }
  @media (max-width: 540px) {
    margin: 2% 5%;
    font-size: 1rem;
    width: 80%;
  }
  @media (max-width: 420px) {
    margin: 5% 4%;
  }
  @media (max-width: 300px) {
    margin: 2% 0%;
  }
`;

const ImageAns = styled.img`
  width: 50%;
  height: 50%;

  @media (max-width: 900px) {
    width: 60%;
    height: 60%;
  }

  @media (max-width: 600px) {
    width: 70%;
    height: 70%;
  }
`;

const Game2 = ({ data, onSelectAnswer }) => {
  const [answer, setAnswer] = useState("");
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const dataAnswer = {
    id: data._id,
    answerState: state,
    score: score,
  };

  useEffect(() => {
    if (answer === data.correctAnswer) {
      setScore(data.score);
      setState(true)
    } else {
      setScore(0);
      setState(false)
    }

    const answerString = JSON.stringify(dataAnswer);
    onSelectAnswer(answerString);
  }, [answer,state, score]);

  if (!data) {
    return <p>Loading...</p>;
  }

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
                <TableCell>{data.vietnamesePhrase}</TableCell>
              </td>
              <td>
                <InputCell
                  placeholder="........."
                  onChange={(e) => setAnswer(e.target.value.toLowerCase())}
                />
              </td>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
};

export default Game2;

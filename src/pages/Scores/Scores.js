import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { FaArrowLeft } from 'react-icons/fa';

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
`;
const BigText = styled.p`
  margin: 0% auto -15% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  margin: 5% auto;
  width: 90%;
  max-height: 600px;
`;
const StyledPieChart = styled(PieChart)`
  width: 800px;
  height: 800px;
  margin: 0% 0% auto auto; 
`;
const Round = styled.div`
  width: 400px;
  height: 600px;
  margin: auto;
  background-color: white;
`;
const Score = styled.div`
  width: 70%;
  min-width: 400px;
  margin: auto;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  padding: 24px 24px;
  text-align: left;
  font: normal 400 28px 'Autour One';
  color: #0E606B;
`;

// const Button = styled.button`
//   width: 300px;
//   padding: 10px 24px;
//   font: normal 400 2rem "Autour One";
//   color: #ffc24b;
//   background-color: white;
//   border: 3px solid #f47068;
//   border-radius: 20px;
// `;
const Button = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;

const StyledPieChartComponent = ({ data }) => {
  const COLORS = ['#f47068', '#ffb3ae'];

  return (
    <StyledPieChart width={800} height={800}>
      <Pie
        data={data}
        cx={400}
        cy={400}
        labelLine={false}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Round />
    </StyledPieChart>
  );
};

const Scores = () => {
  const location = useLocation();
  const [allScore, setAllScore] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const [correctData, setCorrectData] = useState('');
  const [wrongData, setWrongData] = useState('');

  useEffect(() => {
    if (location.state && location.state.score) {
      setAnswerScore(location.state.score);
    }
    if (location.state && location.state.allScore) {
      setAllScore(location.state.allScore);
    }
    if (location.state && location.state.right) {
      setCorrectData(location.state.right);
    }
    if (location.state && location.state.wrong) {
      setWrongData(location.state.wrong);
    }
    console.log(correctData)
  }, [location.state, correctData, wrongData]);

  const data = [
    { name: 'Right', value: answerScore },
    { name: 'no', value: allScore - answerScore },
  ];

  return (
    <>
      <Link to="/"><BackHome /></Link>
      <BigText>Your Scores</BigText>

      <Container>
        <StyledPieChartComponent data={data} />
        <Score>
          <p>Right: {answerScore} = {data[0].value}% </p>
          <p>{correctData}</p>
          <p>Wrong: {allScore - answerScore} = {data[1].value}%</p>
          <p>{wrongData}</p>
        </Score>
      </Container>

      <ButtonsContainer>
        <Button to="/bigtest">Test Again</Button>
        <Button to="/league">League</Button>
      </ButtonsContainer>
    </>
  );
};

export default Scores;

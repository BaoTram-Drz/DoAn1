import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer  } from 'recharts';
import { FaArrowLeft } from 'react-icons/fa';

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
`;
const BigText = styled.p`
  margin: 0% auto 0% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    font-size: 2.5rem;
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
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0% auto 0% auto;
  width: 90%;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }  
  @media (max-width: 540px) {
    
    margin-bottom: 0%
  }
  
  @media (max-width: 480px) {
    margin-top: 5%;
    margin-bottom: 0%;
  }
`;
const StyledPieChart = styled.div`
  width: 100%;
  background-color: red;
  margin: 0% 0% auto auto; 
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }  
  @media (max-width: 540px) {
    
    margin-bottom: 0%
  }
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;
const Round = styled.div`
  width: 400px;
  height: 600px;
  margin: auto;
  background-color: white;
`;
const Score = styled.div`
  width: 90%;
  margin: auto;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  padding: 24px 24px;
  text-align: left;
  font: normal 400 28px 'Autour One';
  color: #0E606B;
  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {    
    width: 95%;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

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
  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;
const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 3% auto;
`;
const WrongText = styled.p`
  margin-left: 5%;
  font: normal 300 2rem "Roboto";
  color: #f47068;
  text-align: left;
  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-left: 2%;
    font-size: 1rem;
  }
`;

const StyledPieChartComponent = ({ data }) => {
  const COLORS = ['#f47068', '#ffb3ae'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
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
  const dung = ((answerScore/allScore)*100).toFixed(0);
  const sai = (((allScore - answerScore)/allScore)*100).toFixed(0);

  const data = [
    { name: 'Right', value:(answerScore/allScore)*100 },
    { name: 'no', value: ((allScore - answerScore)/allScore)*100 },
  ];
  const formattedData = wrongData.replace(/:::/g, '<br/>');
  return (
    <>
      <Link to="/"><BackHome /></Link>
      <BigText>Your Scores</BigText>

      <Container>
      <StyledPieChartComponent data={data} />
        <Score>
          <p>Right: {dung}% </p>
          <p>Wrong: {sai}%</p>
          <WrongText dangerouslySetInnerHTML={{ __html: formattedData }} />
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

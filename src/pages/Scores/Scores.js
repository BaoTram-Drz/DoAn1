import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const BigText = styled.p`
  margin: 6% auto -15% auto;
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
  margin: 5% auto auto 0;
  width: 90%;
`;
const StyledPieChart = styled(PieChart)`
  width: 800px;
  height: 800px;
  margin: 0;
`;
const Round = styled.div`
  width: 400px;
  height: 600px;
  margin: auto;
  background-color: white;
`;
const Score = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  padding: 24px 24px;
  text-align: left;
  font: normal 400 28px 'Autour One';
  color: #0E606B;
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
  const data = [
    { name: 'Right', value: 70 },
    { name: 'no', value: 30 },
  ];
  return (
    <>
      <BigText>Your Scores</BigText>
      <Container>
        <div>
          <StyledPieChartComponent data={data} />
        </div>
        <Score>
            <p>Right: {data[0].value}% </p>
            <p>Wrong: {data[1].value}%</p>
        </Score>
      </Container>
    </>
  );
};

export default Scores;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import top1 from './image/top1.png'
import top2 from './image/top2.png'
import top3 from './image/top3.png'
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import data from './data.json'

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    @media (max-width: 1100px) {
      margin-top: 10%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-top: 25%;
      margin-bottom: -25%;
    }
`;
const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }

  @media (max-width: 1100px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    font-size: 1.5rem;
  }
`;

const TableContainer = styled.div`
  height: 400px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
const Table = styled.table`
  width: 70%;
  margin: 2% auto 5% auto;
  border-collapse: collapse;
`;
const Table1 = styled.div`
  width: 50%;
  margin: 2% auto 5% auto;
  border: 1px solid gray;
  border-radius: 50px;
  overflow: hidden;
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 540px) {
    width: 90%;
  }
`;
const Table2 = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const FlexContainer = styled.tr`
  display: flex;
  flex-direction: row;

  @media (max-width: 912px) {
    flex-direction: column;
  }
`;

const TableHeaderLeftRes = styled.div`
    margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #f47068;
    border-bottom: 3px dashed #ffc24b;
    border-bottom-left-radius: 20px;
    text-align: center;
    @media (max-width: 912px) {
      border-bottom-right-radius: 20px;
    }
    @media (max-width: 1200px) {
      font-size: 1.7rem;
    }
    @media (max-width: 912px) {
      font-size: 1.5rem;
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

const TableHeaderRightRes = styled.div`
    margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #0e606b;
    border-bottom: 3px dashed #ffc24b;
    border-bottom-right-radius: 20px;
    text-align: center;
    @media (max-width: 912px) {
      border-bottom-left-radius: 20px;
    }
    @media (max-width: 1200px) {
      font-size: 1.7rem;
    }
    @media (max-width: 912px) {
      font-size: 1.5rem;
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

const TableRow = styled.tr`
    width: 100%;
    text-align: center;
    background-color: white;   
`;

const TableCellLeft = styled.td`
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #ffb3ae;
    
    @media (max-width: 1200px) {
      font-size: 1.5rem;    }
    
    @media (max-width: 540px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 12px 18px;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
      padding: 6px 8px;
    }
`;

const TableCellRight = styled.td`
    padding: 12px 24px;
    font: normal 400 28px 'Autour One';
    color: #1697a6;
    @media (max-width: 1200px) {
      font-size: 1.5rem;
    }
  
    @media (max-width: 540px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 12px 18px;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
      padding: 6px 8px;
    }
`;

const ImageTop = styled.img`
    width: 60px;
    height: 60px;
  
    @media (max-width: 912px) {
      width: 50px;
      height: 50px;
    }
  
    @media (max-width: 540px) {
      width: 40px;
      height: 40px;
    }
  
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
`;
const ImageAcc = styled.img`
    width: 57px;
    height: 57px;
    padding: 3px;
    border: 2px dashed #ffb3ae;
    border-radius: 50%;
    @media (max-width: 912px) {
      width: 50px;
      height: 50px;
    }
  
    @media (max-width: 540px) {
      width: 45px;
      height: 45px;
    }
  
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
`;
const Exp = styled.td`
    text-align: right;
    padding: 12px 12px;
    font: normal 400 1rem 'Autour One';
    color: gray;
    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 540px) {
      font-size: 1rem;
    }
  
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  
    @media (max-width: 300px) {
      font-size: 0.5rem;
    }
`;

const League = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchLearns = async () => {
      try {
        //const learnData = await getLearns();
        const topAll = data.data1;
        const topMonth = data.data2;
        const user = data.user;
        setData1(topAll);
        setData2(topMonth);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLearns();
  }, []);
  
  return (
    <>
      <Link to="/"><BackHome/></Link>
      <BigText>Top league</BigText>
      <Table>
          <tbody>
            <FlexContainer>                
                  <td>
                      <TableHeaderLeftRes>All Courses</TableHeaderLeftRes>
                      <TableContainer>
                        {data1.map((item) => (
                            <TableRow key={item.id}>
                                <TableCellLeft>
                                    {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                                    {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                                    {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                                    {item.top === 1 ?  null :  item.top === 2 ? null: item.top === 3 ?  null: item.id}
                                </TableCellLeft>
                                <TableCellLeft>
                                    <ImageAcc src={item.image} alt={item.name} />
                                </TableCellLeft>
                                <TableCellLeft>{item.name}</TableCellLeft>
                                <Exp>{item.exp} exp</Exp>
                            </TableRow>
                        ))}
                      </TableContainer>
                  </td>
                  <td>
                      <TableHeaderRightRes>Month</TableHeaderRightRes>
                      <TableContainer>
                        {data2.map((item) => (
                            <TableRow key={item.id}>
                                <TableCellRight>
                                    {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                                    {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                                    {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                                    {item.top === 1 ?  null :  item.top === 2 ? null: item.top === 3 ?  null: item.id}
                                </TableCellRight>
                                <TableCellRight>
                                    <ImageAcc src={item.image} alt={item.name} />
                                </TableCellRight>
                                <TableCellRight>{item.name}</TableCellRight>
                                <Exp>{item.exp} exp</Exp>
                            </TableRow>
                        ))}
                      </TableContainer>
                  </td>                
            </FlexContainer>
          </tbody>
        </Table>
        <Table1>
          <Table2>
          {user.map((item) => (
            <TableRow key={item.id}>              
                <TableCellRight>
                    {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                    {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                    {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                    {item.top === 1 ?  null :  item.top === 2 ? null: item.top === 3 ?  null: item.id}
                </TableCellRight>
                <TableCellRight>
                    <ImageAcc src={item.image} alt={item.name} />
                </TableCellRight>
              <TableCellLeft>{item.name}</TableCellLeft>
                <Exp>{item.exp} exp</Exp>                
            </TableRow>
            ))}
          </Table2>
        </Table1>
    </>
   
  );
};

export default League;

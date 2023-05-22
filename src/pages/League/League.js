import React, { useState, useEffect } from "react";
import styled from "styled-components";
import top1 from './image/top1.png'
import top2 from './image/top2.png'
import top3 from './image/top3.png'
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
`;
const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const TableWrapper = styled.div`
  width: 80%;
  margin: 5% auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderLeft = styled.div`
    margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #f47068;
    border-bottom: 3px dashed #ffc24b;
    border-bottom-left-radius: 20px;
`;

const TableHeaderRight = styled.div`
    margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #0e606b;
    border-bottom: 3px dashed #ffc24b;
    border-bottom-right-radius: 20px;
`;

const TableRow = styled.tr`
    width: 100%;
    text-align: center;
    background-color: white;
`;

const TableCellLeft = styled.td`
    padding: 12px 24px;
    font: normal 400 28px 'Autour One';
    color: #ffb3ae;
`;

const TableCellRight = styled.td`
    padding: 12px 24px;
    font: normal 400 28px 'Autour One';
    color: #1697a6;
`;

const ImageTop = styled.img`
    width: 60px;
    height: 60px;
`;
const ImageAcc = styled.img`
    width: 57px;
    height: 57px;
    padding: 3px;
    border: 2px dashed #ffb3ae;
    border-radius: 50%;
`;
const Exp = styled.td`
    text-align: right;
    padding: 12px 24px;
    font: normal 400 1rem 'Autour One';
    color: gray;
`;

const League = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ cơ sở dữ liệu và set vào state
    fetchDataFromDatabase()
      .then((response) => {
        setData1(response.data1);
        setData2(response.data2);
      })
      .catch((error) => console.error(error));
  }, []);
  
  // Hàm lấy dữ liệu từ cơ sở dữ liệu (giả sử là API)
  const fetchDataFromDatabase = () => {
    return new Promise((resolve, reject) => {
      // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy dữ liệu
      // Giả sử dữ liệu trả về là một mảng các đối tượng
      const data1 = [
        { id: 1, name: "JohnJohn", image: 'https://via.placeholder.com/200x200', exp: 1000, top: 1 },
        { id: 2, name: "AliceJohn", image: 'https://via.placeholder.com/200x200', exp: 900, top: 2 },
        { id: 3, name: "BobJohn", image: 'https://via.placeholder.com/200x200', exp: 800, top: 3 },
        { id: 4, name: "BinJohn", image: 'https://via.placeholder.com/200x200', exp: 700},
      ];
      const data2 = [
        { id: 1, name: "JohnJohn", image: 'https://via.placeholder.com/200x200', exp: 100, top: 1  },
        { id: 2, name: "AliceJohn", image: 'https://via.placeholder.com/200x200', exp: 90, top: 2  },
        { id: 3, name: "BobJohn", image: 'https://via.placeholder.com/200x200', exp: 80, top: 3  },
        { id: 4, name: "BinJohn", image: 'https://via.placeholder.com/200x200', exp: 70},
      ];
      resolve({ data1, data2 });
    });
  };

  return (
    <>
      <Link to="/"><BackHome/></Link>
      <BigText>Top league</BigText>
      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              <th><TableHeaderLeft>All Courses</TableHeaderLeft></th>
              <th><TableHeaderRight>Month</TableHeaderRight></th>
            </TableRow>
          </thead>
          <tbody>
            <tr>
                <td>
                    {data1.map((item) => (
                        <TableRow key={item.id}>
                            <TableCellLeft>
                                {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                                {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                                {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                            </TableCellLeft>
                            <TableCellLeft>
                                <ImageAcc src={item.image} alt={item.name} />
                            </TableCellLeft>
                            <TableCellLeft>{item.name}</TableCellLeft>
                            <Exp>{item.exp} exp</Exp>
                        </TableRow>
                    ))}
                </td>
                <td>
                    {data2.map((item) => (
                        <TableRow key={item.id}>
                            <TableCellRight>
                                {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                                {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                                {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                            </TableCellRight>
                            <TableCellRight>
                                <ImageAcc src={item.image} alt={item.name} />
                            </TableCellRight>
                            <TableCellRight>{item.name}</TableCellRight>
                            <Exp>{item.exp} exp</Exp>
                        </TableRow>
                    ))}
                </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </>
   
  );
};

export default League;

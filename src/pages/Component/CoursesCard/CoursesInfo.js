import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';


const BigText = styled.div`
  margin: 7% auto auto auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 2rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2%  0% 5% auto;
`;

const TableWrapper = styled.table`
  width: 90%;
  text-align: center;
`;

const TableHeader = styled.div`
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #FFC24B;
    border-bottom: 3px dashed #FFB3AE;
    border-radius: 20px;
`;

const TableRow = styled.tr`
  background-color: white;
`;

const TableCellId = styled.div`
    width: 80%;
    float: right;
    font: normal 400 28px/1.5 'Autour One';
    color: #FFC24B;
    border: 2px dashed #FFB3AE;
    border-radius: 50%;    
`;

const TableCell = styled.td`
    padding: 12px 24px;
    font: normal 400 28px 'Autour One';
    color: #0E606B;
`;

const DivWrapper = styled.div`
    margin: auto;
    width: 80%;
    height: 535px;
    background: #1697A6;
    border: 3px solid #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 0 2px gray;
`;
const DivWrapper1 = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    height: 326px;
    background: #0E606B;
    border-radius: 20px 20px 0px 0px;
`;

const DivWrapper2 = styled.div`
    position: absolute;
    margin: 5%;
    width: 90%;
    height: 372px;
    background: #FFF4F1;
    border: 3px dashed #1697A6;
    border-radius: 30px;

    font-family: 'Autour One';
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 200px;
    color: #FFC24B;
    text-shadow: 10 10 10 10 white;
    text-align: center;
`;

// const TextName = styled.label`
//     margin: 50%;
    
//     transform: rotate(-0.03deg);
//     transform: translate(50%, 100px);
// `;

const CoursesInfo = () => {
    const location = useLocation();
    const [productName, setProductName] = useState('');
    
    const [data, setData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (location.state && location.state.productname) {
            setProductName(location.state.productname);
          }
      
        fetchDataFromDatabase()
        .then((response) => setData(response))
        .catch((error) => console.error(error));
    }, []);

    // Hàm lấy dữ liệu từ cơ sở dữ liệu (giả sử là API)
    const fetchDataFromDatabase = () => {
        return new Promise((resolve, reject) => {
        // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy dữ liệu
        // Giả sử dữ liệu trả về là một mảng các đối tượng
        const data = [
            { id: 1, name: "Lesson 1"},
            { id: 2, name: "Lesson 2"},
            { id: 3, name: "Lesson 3"},
            { id: 4, name: "Lesson 4"},
            { id: 5, name: "Lesson 5"},
            { id: 6, name: "Lesson 6"},
        ];
        resolve(data);
        });
    };
  
    return (
    <>
        <BigText>Course Detail</BigText>
        <Container>
            <TableWrapper>
                <thead>
                <TableRow>
                    <th colSpan="2"><TableHeader>Course List</TableHeader></th>
                </TableRow>
                </thead>
                <tbody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <td><TableCellId>{item.id}</TableCellId></td>
                        <TableCell>{item.name}</TableCell>
                        
                    </TableRow>
                ))}
                </tbody>
            </TableWrapper>
            <DivWrapper>
                <DivWrapper1>
                    <DivWrapper2>
                        {productName}
                    </DivWrapper2>
                </DivWrapper1>
            </DivWrapper>
        </Container>
    </>
  );
};

export default CoursesInfo;
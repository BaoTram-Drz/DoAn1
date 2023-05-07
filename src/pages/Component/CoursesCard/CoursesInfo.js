import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const BigText = styled.div`
  margin: 7% auto auto auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }
`;

const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2%  0% 5% auto;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 2%;
  }
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
    margin: auto auto 5% auto;
    width: 80%;
    height: 535px;
    text-align: center;
    background-image: linear-gradient(#0E606B, #1697A6);
    border: 3px solid #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 0 2px gray;
    @media (max-width: 800px) {
      width: 100%;
    }
`;

const DivWrapper2 = styled.div`
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
    text-shadow:
    -5px -5px 0 #fff, /* Viền trắng bên trái trên */
     5px -5px 0 #fff, /* Viền trắng bên phải trên */
    -5px  5px 0 #fff, /* Viền trắng bên trái dưới */
     5px  5px 0 #fff;
    text-align: center;
`;
const Button = styled(Link)`
    width: 60%;
    min-width: 200px;
    margin: auto;
    padding: 5px 24px;
    text-decoration: none;
    font: normal 400 2rem "Autour One";
    color: #ffc24b;
    background-color: white;
    border: 3px dashed #1697A6;
    border-radius: 20px;
`;

const ButtonL = styled(Link)`
  margin: 10% 20%;
  width: 100%;
  min-width: 300px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  text-decoration: none;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const CoursesInfo = () => {
    const location = useLocation();
    const [productName, setProductName] = useState('Product A');
    
    const [data, setData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (location.state && location.state.productname) {
            setProductName(location.state.productname);
          }
    }, [location.state]);

    useEffect(() => {
        fetchDataFromDatabase()
        .then((response) => setData(response))        
        .catch((error) => console.error(error));
    }, [productName]);

    console.log("prod", location.state);
    console.log("prodN", productName);
    
    // Hàm lấy dữ liệu từ cơ sở dữ liệu (giả sử là API)
    const fetchDataFromDatabase = () => {
        return new Promise((resolve, reject) => {
          // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy dữ liệu
          // Giả sử dữ liệu trả về là một mảng các đối tượng
          const data = {
            "0": [
                { id: 1, name: "0" },
                { id: 2, name: "0" },
                { id: 3, name: "0" },
                { id: 4, name: "0" },
              ],
            "Product A": [
              { id: 1, name: "Lesson 1" },
              { id: 2, name: "Lesson 2" },
              { id: 3, name: "Lesson 3" },
              { id: 4, name: "Lesson 1" },
              { id: 5, name: "Lesson 2" },
              { id: 6, name: "Lesson 3" },
              { id: 7, name: "Lesson 4" },
              { id: 8, name: "Lesson 2" },
              { id: 9, name: "Lesson 3" },
              { id: 10, name: "Lesson 4" },
            ],
            "Product B": [
              { id: 1, name: "Lesson 1" },
              { id: 2, name: "Lesson 2" },
            ],
            "Product C": [
              { id: 1, name: "Lesson 1" },
              { id: 2, name: "Lesson 2" },
              { id: 3, name: "Lesson 3" },
              { id: 4, name: "Lesson 4" },
            ],
          };
          resolve(data[productName] || data[0] );
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
            <p>
              <DivWrapper>
                  <DivWrapper2>
                      {productName}
                  </DivWrapper2>     
                  <Button to="/vocab">Start Learn</Button>
              </DivWrapper>
              <ButtonL to="/league">Top League</ButtonL>
            </p>
        </Container>
    </>
  );
};

export default CoursesInfo;

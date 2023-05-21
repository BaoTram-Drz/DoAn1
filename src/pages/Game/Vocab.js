import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const BigText = styled.p`
    margin: 8% auto 3% auto;
    text-align: center;
    font-family: 'Bungee Inline';
    font-weight: 400;
    font-size: 3rem;
    color: #F47068;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    @media (max-width: 1280px) {
        margin: 10% auto 5% auto;
        font-size: 2.5rem;
    }
    @media (max-width: 1024px) {
        font-size: 2rem;
    }
    @media (max-width: 768px) {
        margin: 20% auto 10% auto;
    }
    @media (max-width: 540px) {
        margin: 25% auto 10% auto;
        font-size: 1.5rem;
    }
    @media (max-width: 280px) {
        margin: 35% auto 10% auto;
        font-size: 1rem;
    }
`;

const TableWrapper = styled.div`
  width: 80%;
  margin: 5% auto;
  @media (max-width: 912px) {
    width: 90%;
  }
  @media (max-width: 412px) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
    margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #f47068;
    @media (max-width: 1280px) {
        font-size: 1.5rem;
    }
    @media (max-width: 415px) {
        font-size: 1rem;
    }
    @media (max-width: 280px) {
        font-size: 0.5rem;
    }
`;
const TableHeaderLeft = styled.div`
    border-bottom: 3px dashed #ffc24b;
    border-bottom-left-radius: 20px;
`;
const TableHeaderCenter = styled.div`
    border-bottom: 3px dashed #ffc24b;
`;
const TableHeaderRight = styled.div`
    border-bottom: 3px dashed #ffc24b;
    border-bottom-right-radius: 20px;
`;

const TableRow = styled.tr`
    width: 100%;
    text-align: center;
    background-color: white;
`;

const TableCellEng = styled.td`
    padding: 12px 24px;
    font: normal 400 28px 'Autour One';
    color: #1697a6;
    border-bottom: 1px dashed #ffb3ae;
    @media (max-width: 1280px) {
        font-size: 1.5rem;
    }
    @media (max-width: 415px) {
        font-size: 1rem;
    }
    @media (max-width: 280px) {
        font-size: 0.5rem;
    }
`;

const TableCellViet = styled.td`
    padding: 12px 24px;
    font: normal 400 28px 'Roboto';
    color: #1697a6;
    border-bottom: 1px dashed #ffb3ae;
    @media (max-width: 1280px) {
        font-size: 1.5rem;
    }
    @media (max-width: 415px) {
        font-size: 1rem;
    }
    @media (max-width: 280px) {
        font-size: 0.5rem;
    }
`;

const ImageAcc = styled.img`
    width: 100%;
    max-width: 100px;
    min-width: 30px;
    height: 100%;
    padding: 3px;
    border: 2px dashed #ffb3ae;
    border-radius: 25%;    
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
    @media (max-width: 1280px) {
        font-size: 1.5rem;
    }
    @media (max-width: 415px) {
        font-size: 1rem;
    }
    @media (max-width: 280px) {
        font-size: 0.5rem;
    }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;

const Vocab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ cơ sở dữ liệu và set vào state
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
        { id: 1, eng: "Orange", viet:"Cam", image: 'https://via.placeholder.com/200x200'},
        { id: 2, eng: "Apple", viet:"Táo", image: 'https://via.placeholder.com/200x200' },
        { id: 3, eng: "Watermelon", viet:"Dưa hấu", image: 'https://via.placeholder.com/200x200' },
        { id: 4, eng: "Banana", viet:"Chuối", image: 'https://via.placeholder.com/200x200' },
      ];
      
      resolve(data);
    });
  };

  return (
    <>      
      <BigText>Learn Vocabulary</BigText>
        
    <TableWrapper>
        <Table>
            <TableHeader>
                <th><TableHeaderLeft>English</TableHeaderLeft></th>
                <th><TableHeaderCenter>VietNamese</TableHeaderCenter></th>
                <th><TableHeaderRight>Image</TableHeaderRight></th>
            </TableHeader>
            <tbody>
            
                {data.map((item) => (
                    <TableRow key={item.id}>                            
                        
                        <TableCellEng>{item.eng}</TableCellEng>
                        <TableCellViet>{item.viet}</TableCellViet>
                        <TableCellEng>
                            <ImageAcc src={item.image} alt={item.name} />
                        </TableCellEng>
                    </TableRow>
                ))}                   
                
            </tbody>
        </Table>
      </TableWrapper>

      <ButtonsContainer>
        <Button to="/coursesinfo">Pre</Button>
        <Button to="/layoutlearn">Next</Button>
      </ButtonsContainer>      
    </>
   
  );
};

export default Vocab ;

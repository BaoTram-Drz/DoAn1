import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";


const BigText = styled.p`
  margin: auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 912px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 540px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
`;

const HeadersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5% auto auto auto;
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
`;
const SubButton = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-align: center;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;

const BigTest = () => {
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
        {
          
          kind: "Game",
          category: "Game1",
          order: 1,
          lessonTitle: "Lesson 1",
          question: "What is the correct form of the verb?",
          answerOptions: [
            { id: "A", text: "Option A" },
            { id: "B", text: "Option B" },
            { id: "C", text: "Option C" },
            { id: "D", text: "Option D" },
          ],
          correctAnswer: "A",
        },
        {
          kind: "Game",
          category: "Game2",
          order: 2,
          lessonTitle: "Write vocabulary",
          question: "Write",
          answerOptions: [
            {
                id: "image",
                imageUrl: 'https://via.placeholder.com/200x200',
                vietnamesePhrase: "Quả táo", // Cụm từ tiếng Việt
              },
          ],
          correctAnswer: "Apple",
        },
        {
          kind: "Game",
          category: "Game4",
          order: 3,
          lessonTitle: "Lesson 3",
          question: "Complete the sentence with the correct word.",
          answerOptions: [
            { id: "1", text: "Option A" },
            { id: "2", text: "Option B" },
            { id: "3", text: "Option C" },
            { id: "4", text: "Option D" },
          ],
          correctAnswer: "C",
        },
        {
            kind: "Game",
            category: "Game3",
            order: 3,
            lessonTitle: "Lesson 4",
            question: "Complete the sentence with the correct word.",
            textOptions: [
                { id: "1", text: "Apple" },
                { id: "2", text: "Bút chì" },
                { id: "3", text: "Ruler" },
                { id: "4", text: "Nước" },
              ],
            answerOptions: [
              { id: "a", text: "Cây thước" },
              { id: "b", text: "Water" },
              { id: "c", text: "Pencil" },
              { id: "d", text: "Trái táo" },
            ],
            correctAnswer: "C",
          },
      ];
      
      resolve(data);
    });
  };

  return (
    <>      
      <HeadersContainer>
      <Header>Test</Header>
      <Header><BigText>BigTest</BigText></Header>
      <Header>10/10</Header>
    </HeadersContainer>
        
        {data.map((item) => {
            if (data.includes(item.id)) {
            return null;
            }
            return (
                <>
                    {item?.category === 'Game1' && <Game1  data={item}/>}
                    {item?.category === 'Game2' && <Game2  data={item}/>}
                    {item?.category === 'Game3' && <Game3  data={item}/>}
                    {item?.category === 'Game4' && <Game4  data={item}/>} 
                </>                    
            );
        })}

      <ButtonsContainer>
        <Button to="/layoutlearn">Pre</Button>
        <SubButton to="/scores">Submit</SubButton>
      </ButtonsContainer>
      <Link to="/league"> League</Link>
      <Link to="/game1"> game</Link>
      
    </>
   
  );
};

export default BigTest ;

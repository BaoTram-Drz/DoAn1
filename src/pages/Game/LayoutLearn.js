import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Game1 from "./BigTest/Game1";
import Game2 from "./BigTest/Game2";
import Game3 from "./BigTest/Game3";
import Game4 from "./BigTest/Game4";


const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
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

const Button = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
`;

const ButtonTest = styled(Link)`
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

const SubButton = styled.button`
  width: 200px;
  padding: 5px 24px;
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

const LayoutLearn = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          {
            kind: "BigTest",
          },
      ];
      
      resolve(data);
    });
  };

  const handlePrevButtonClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };  

  const handleNextButtonClick = () => {
    if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
    }
  };
  
  return (
    <>
      <BigText>Word pairing</BigText>
      <HeadersContainer>
      <Header>{data[currentIndex]?.kind}</Header>
      <Header>{data[currentIndex]?.lessonTitle}</Header>
      <Header>{data[currentIndex]?.order}/10</Header>
    </HeadersContainer>
        {data[currentIndex]?.category === 'Game1' && <Game1  data={data[currentIndex]}/>}
        {data[currentIndex]?.category === 'Game2' && <Game2  data={data[currentIndex]}/>}
        {data[currentIndex]?.category === 'Game3' && <Game3  data={data[currentIndex]}/>}
        {data[currentIndex]?.category === 'Game4' && <Game4  data={data[currentIndex]}/>}
      <ButtonsContainer>
        <Button onClick={handlePrevButtonClick}>Pre</Button>
        <SubButton>Submit</SubButton>
        {
          data[currentIndex + 1]?.kind === 'BigTest' ? (
            <ButtonTest to="/bigtest">Next</ButtonTest>
          ) : (
            <Button onClick={handleNextButtonClick}>Next</Button>
          )
        }
      </ButtonsContainer>

      
    </>
   
  );
};

export default LayoutLearn ;

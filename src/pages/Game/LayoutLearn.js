import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate  } from 'react-router-dom';
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

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Header = styled.div`
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;

  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
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
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;

  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
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

  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
`;

const SubButton = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;

  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [productName, setProductName] = useState('Product A');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);

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
          "_id": {
            "$oid": "646b33846ab3c546adefb8c9"
          },
          "kind": "Game",
          "category": "Game1",
          "lesson": "1",
          "topic": "fruits",
          "lessonTitle": "Lesson 1",
          "question": "What does 'water melon' means in Vietnamese?",
          "answerOptions": [
            {
              "id": "A",
              "text": "Quả dưa hấu"
            },
            {
              "id": "B",
              "text": "Quả táo"
            },
            {
              "id": "C",
              "text": "Quả xoài"
            },
            {
              "id": "D",
              "text": "Quả măng cụt"
            }
          ],
          "image": "watermelon.jpg",
          "correctAnswer": "A"
        },
        {
          "_id": {
            "$oid": "646b33846ab3c546adefb8ca"
          },
          "kind": "Game",
          "category": "Game1",
          "lesson": "2",
          "topic": "fruits",
          "lessonTitle": "Lesson 2",
          "question": "What does 'mangosteen' means in Vietnamese?",
          "answerOptions": [
            {
              "id": "A",
              "text": "Quả dừa"
            },
            {
              "id": "B",
              "text": "Quả bơ"
            },
            {
              "id": "C",
              "text": "Quả chôm chôm"
            },
            {
              "id": "D",
              "text": "Quả măng cụt"
            }
          ],
          "image": "mangosteen.jpg",
          "correctAnswer": "D"
        },
        {
          "_id": {
            "$oid": "646b33846ab3c546adefb8cb"
          },
          "kind": "Game",
          "category": "Game1",
          "lesson": "3",
          "topic": "fruits",
          "lessonTitle": "Lesson 3",
          "question": "What does 'rambutan' means in Vietnamese?",
          "answerOptions": [
            {
              "id": "A",
              "text": "Quả chôm chôm"
            },
            {
              "id": "B",
              "text": "Quả măng cụt"
            },
            {
              "id": "C",
              "text": "Quả nhãn"
            },
            {
              "id": "D",
              "text": "Quả táo"
            }
          ],
          "image": "rambutan.jpg",
          "correctAnswer": "A"
        },
        {
          "_id": {
            "$oid": "646b33846ab3c546adefb8cc"
          },
          "kind": "Game",
          "category": "Game1",
          "lesson": "4",
          "topic": "fruits",
          "lessonTitle": "Lesson 4",
          "question": "What does 'payaya' means in Vietnamese?",
          "answerOptions": [
            {
              "id": "A",
              "text": "Quả đu đủ"
            },
            {
              "id": "B",
              "text": "Quả táo"
            },
            {
              "id": "C",
              "text": "Quả xoài"
            },
            {
              "id": "D",
              "text": "Quả thơm"
            }
          ],
          "image": "payaya.jpg",
          "correctAnswer": "A"
        }
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

  const handleAnswerSelected = (answerId) => {
    setSelectedAnswer(answerId);
    // Xử lý giá trị answerId đã chọn từ Game1 tại đây
    console.log("Selected answer:", answerId);
  };

  return (
    <>
      <BigText>Word pairing</BigText>
      <HeadersContainer>
        <Header>{data[currentIndex]?.kind}</Header>
        <Header>{data[currentIndex]?.lessonTitle}</Header>
        <Header>{data[currentIndex]?.lesson}/4</Header>
      </HeadersContainer>
      {data[currentIndex]?.category === 'Game1' && <Game1 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected} />}
      {data[currentIndex]?.category === 'Game2' && <Game2 data={data[currentIndex]} />}
      {data[currentIndex]?.category === 'Game3' && <Game3 data={data[currentIndex]} />}
      {data[currentIndex]?.category === 'Game4' && <Game4 data={data[currentIndex]} />}
      <ButtonsContainer>
        {currentIndex === 0 ? (
          <Button to={'/vocab'} state={{ productname: productName}}>Pre</Button>
        ) : (
          <Button onClick={handlePrevButtonClick}>Pre</Button>
        )}
        <SubButton>Submit</SubButton>
        {data[currentIndex + 1]?.kind === 'BigTest' ? (
          <ButtonTest to="/bigtest">Next</ButtonTest>
        ) : (
          <Button onClick={handleNextButtonClick}>Next</Button>
        )}
      </ButtonsContainer>
    </>
  );
};

export default LayoutLearn;

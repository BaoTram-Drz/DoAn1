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

const ButtonLeft = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;

  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
`;

const ButtonRight = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: ${props => (props.isAnswerCorrect ? "#ffc24b" : "gray")};
  background-color: white;
  border: 3px solid ${props => (props.isAnswerCorrect ? "#f47068" : "gray")};
  border-radius: 20px;
  text-align: center;
  text-decoration: none;

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
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (data[currentIndex]?.state === "true") {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  }, [data, currentIndex]);


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
          "state":"true",
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
          "category": "Game2",
          "lesson": "2",
          "topic": "fruits",
          "lessonTitle": "Lesson 2",
          "state": "true",
          "question": "Write text",
          "vietnamesePhrase": "Trái táo",
          "image": "mangosteen.jpg",
          "correctAnswer": "apple"
        },
        {
          "_id": {
            "$oid": "646b33846ab3c546adefb8cb"
          },
          "kind": "Game",
          "category": "Game3",
          "lesson": "3",
          "topic": "fruits",
          "lessonTitle": "Lesson 3",
          "state":"false",
          "question": "What does 'rambutan' means in Vietnamese?",
          "textOptions": [
            { id: "1", text: "Apple" },
            { id: "2", text: "Bút chì" },
            { id: "3", text: "Ruler" },
            { id: "4", text: "Nước" },
          ],
        "answerOptions": [
          { id: "a", text: "Cây thước" },
          { id: "b", text: "Water" },
          { id: "c", text: "Pencil" },
          { id: "d", text: "Trái táo" },
        ],
          "image": "rambutan.jpg",
          "correctAnswer": "1: d, 2: c, 3: a, 4: b"
        },
        {
          "_id": {
            "$oid": "646b33846ab3c546adefb8cc"
          },
          "kind": "Game",
          "category": "Game4",
          "lesson": "4",
          "topic": "fruits",
          "lessonTitle": "Lesson 4",
          "state":"false",
          "question": "What does 'payaya' means in Vietnamese?",
          "answerOptions": [
            { id: "1", text: "Option A" },
            { id: "2", text: "Option B" },
            { id: "3", text: "Option C" },
            { id: "4", text: "Option D" },
          ],
          "image": "payaya.jpg",
          "correctAnswer": "1234"
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
    if (currentIndex < data.length - 1 && isAnswerCorrect ) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerCorrect(false);
    }
  };

  const handleAnswerSelected = (answerId) => {
    setSelectedAnswer(answerId);
  };
  
  console.log(selectedAnswer);

  const submitAnswerSelected = () => {
    const correctAnswer = data[currentIndex]?.correctAnswer;
    if(correctAnswer === selectedAnswer){
      console.log("chọn đúng");
      setIsAnswerCorrect(true);
    }else {
      console.log("chọn sai");
      setIsAnswerCorrect(false);
    }
  };

  return (
    <>
      <BigText>Word pairing</BigText>
      <HeadersContainer>
        <Header>{data[currentIndex]?.kind}</Header>
        <Header>{data[currentIndex]?.lessonTitle}</Header>
        <Header>{data[currentIndex]?.lesson}/4</Header>
      </HeadersContainer>
      '{selectedAnswer}'
      {data[currentIndex]?.category === 'Game1' && <Game1 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected}/> }
      {data[currentIndex]?.category === 'Game2' && <Game2 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected}/> }
      {data[currentIndex]?.category === 'Game3' && <Game3 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected}/> }
      {data[currentIndex]?.category === 'Game4' && <Game4 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected}/> }
      <ButtonsContainer>

        {currentIndex === 0 ? (
          <ButtonLeft to={'/vocab'} state={{ productname: productName}}>Pre</ButtonLeft>
        ) : (
          <ButtonLeft onClick={handlePrevButtonClick}>
            Pre
          </ButtonLeft>
        )}

        <SubButton onClick={submitAnswerSelected}>
          Submit
        </SubButton>

        {data[currentIndex + 1]?.kind === 'BigTest' ? (
          <ButtonTest to="/bigtest">
            Next
          </ButtonTest>
        ) : (
          <ButtonRight
            onClick={handleNextButtonClick}
            disabled={!isAnswerCorrect}
            isAnswerCorrect={isAnswerCorrect}
          >
            Next
          </ButtonRight>
        )}
      </ButtonsContainer>
    </>
  );
};

export default LayoutLearn;

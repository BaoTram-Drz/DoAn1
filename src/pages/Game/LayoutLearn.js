import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import Game1 from './BigTest/Game1';
import Game2 from './BigTest/Game2';
import Game3 from './BigTest/Game3';
import Game4 from './BigTest/Game4';
import datas from './data.json';
import { getLearns } from '../../API/coursesData';
import MyLottieAnimation from './LottieAnimation/MyLottieAnimation';


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

const ButtonTest = styled(Link)`a
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
  font: normal 400 2rem 'Autour One';
  color: #f47068;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 2;

  &:hover{
    color: white;
    background-color: #f47068;
  }

  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;

const Text1  = styled.p`
  width: 40%;
  padding: 12px 24px;
  margin: 0 auto;
  font: normal 400 2rem 'Autour One';
  text-align: center;
  color: black;
`;

const LayoutLearn = () => {
  const [data, setData] = useState([]);  
  const [productName, setProductName] = useState('Product A');
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [answerScore, setAnswerScore] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isFireWork, setIsFireWork] = useState(null);
  const location = useLocation();

  //kiểm tra bài này đã pass chưa
  useEffect(() => {
    // Lấy dữ liệu từ cơ sở dữ liệu và set vào state
    fetchDataFromDatabase()
      .then((response) => setData(response))
      .catch((error) => console.error(error));
    if (data[currentIndex]?.state === 'true') {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsFireWork(null);
  }, [data, currentIndex]);

  //lấy tên chủ đề từ trang trước 
  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);

  //Api lấy dữ liệu
  useEffect(() => {
    const fetchLearns = async () => {
      try {
        //const learnData = await getLearns(productName);
        const learnData = datas;
        setData(learnData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLearns();
  }, []);

  const handlePrevButtonClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };  

  const handleNextButtonClick = () => {
    if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex < data.length - 1 && isAnswerCorrect) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswerCorrect(false);
    }
    console.log(data[currentIndex + 1]?.lesson)
    console.log(data[currentIndex + 1]?.kind)
  };
  

  const handleGetAnswerScore = (score) => {
    setAnswerScore(score); // lấy số điểm mà người dùng đạt được
  };

  const submitAnswerSelected = () => {
    const dataScore = data[currentIndex]?.score; //điểm của câu hỏi
    if (data[currentIndex]?.state === 'true') { //trường hợp đã pass
      setIsAnswerCorrect(true);
    } else if (dataScore === answerScore) { //trường hợp so sánh điểm => full
      setIsAnswerCorrect(true);
      setIsFireWork(true);
    } else { //trường hợp so sánh điểm => bằng 0
      setIsAnswerCorrect(false);    
      setIsFireWork(false)    
    }      
    setAnswerScore(0); 
  };

  return (
    <>
      <BigText>Word pairing</BigText>
        <HeadersContainer>
        <Header>{data[currentIndex]?.kind}</Header>
        <Header>{data[currentIndex]?.lessonTitle}</Header>
        <Header>{data[currentIndex]?.order}/10</Header>
      </HeadersContainer>
  
      <>
        {data[currentIndex]?.category === 'Game1' && (
          <Game1 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {data[currentIndex]?.category === 'Game2' && (
          <Game2 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {data[currentIndex]?.category === 'Game3' && (
          <Game3 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {data[currentIndex]?.category === 'Game4' && (
          <Game4 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
      </>
      {isFireWork === true && 
        <>
          <MyLottieAnimation/>
        </>
      }
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

      
      {isFireWork === false && <Text1>Oh no</Text1>}
    </>
   
  );
};

export default LayoutLearn;

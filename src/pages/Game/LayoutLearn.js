import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Game1 from './BigTest/Game1';
import Game2 from './BigTest/Game2';
import Game3 from './BigTest/Game3';
import Game4 from './BigTest/Game4';
import Fireworks from './FireWorks';
import datas from './data.json';
import { getLearns } from '../../API/coursesData';


const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }

  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }

  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }

  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1.5rem;
  }
`;

const Header = styled.div`
  padding: 12px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
  text-align: center;
  
  @media (max-width: 1200px) {
    width: 150px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 100px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 5px 12px;
    font-size: 1rem;
    border-width: 2px;
  }
  @media (max-width: 280px) {
    padding: 5px 0px;
    font-size: 0.8rem;
  }
`;

const HeadersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5% auto auto auto;
`;

const ButtonLeft = styled(Link)`
  width: 150px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

const ButtonRight = styled(Link)`
  width: 150px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: ${(props) => (props.isAnswerCorrect ? '#ffc24b' : 'gray')};
  background-color: white;
  border: 3px solid ${(props) => (props.isAnswerCorrect ? '#f47068' : 'gray')};
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

const ButtonTest = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 30px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

const SubButton = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 2;

  &:hover{
    border: 3px solid black;
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

const FireContainer = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  z-index: 2;
  margin-top: -5%;
  margin-bottom: 0px;
`;

const Text = styled.p`
  width: 100%;  
  padding: 12px 24px;
  margin: 0% auto 5% auto;
  font: normal 400 1.5rem 'Autour One';
  text-align: center;
  color: #ffc24b;
  position: relative;
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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerArray, setAnswerArray] = useState();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isFireWork, setIsFireWork] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (data[currentIndex]?.state === 'true') {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsFireWork(null);
  }, [data, currentIndex]);

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);

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
    if (currentIndex < data.length - 1 && isAnswerCorrect) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerCorrect(false);
    }
  };

  const handleAnswerSelected = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleAnswerArray = (tableStrings) => {
    const parsedArray = JSON.parse(tableStrings);
    setAnswerArray(parsedArray);
  };

  const submitAnswerSelected = () => {
    const correctAnswer = data[currentIndex]?.correctAnswer;

    if (typeof correctAnswer === 'string') {
      if (data[currentIndex]?.state === 'true') {
        setIsAnswerCorrect(true);
      } else if (correctAnswer === selectedAnswer) {
        setIsAnswerCorrect(true);
        setIsFireWork(true);
      } else {
        setIsAnswerCorrect(false);    
        setIsFireWork(false)    
      }
    } 
    
    else {
      const isMatch = correctAnswer.every((item) =>
        answerArray.some((selectedItem) =>
          selectedItem.id === item.id && selectedItem.text === item.text
        )
      );

      if (data[currentIndex]?.state === 'true') {
        setIsAnswerCorrect(true);
      } else if (isMatch) {
        setIsAnswerCorrect(true);
        setIsFireWork(true);
      } else {
        setIsAnswerCorrect(false);    
        setIsFireWork(false)    
      }
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
  
      <>
        {data[currentIndex]?.category === 'Game1' && (
          <Game1 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected} />
        )}
        {data[currentIndex]?.category === 'Game2' && (
          <Game2 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected} />
        )}
        {data[currentIndex]?.category === 'Game3' && (
          <Game3 data={data[currentIndex]} onSelectAnswer={handleAnswerArray} />
        )}
        {data[currentIndex]?.category === 'Game4' && (
          <Game4 data={data[currentIndex]} onSelectAnswer={handleAnswerSelected} />
        )}
      </>
      {isFireWork === true && 
        <>
          <Text> Bingo </Text>
          <FireContainer><Fireworks/></FireContainer>         
        </>
      }
      <ButtonsContainer>
        {currentIndex === 0 ? (
          <ButtonLeft to="/vocab" state={{ productname: productName }}>
            Pre
          </ButtonLeft>
        ) : (
          <ButtonLeft onClick={handlePrevButtonClick}>Pre</ButtonLeft>
        )}

        <SubButton onClick={submitAnswerSelected}>Submit</SubButton>

        {data[currentIndex + 1]?.kind === 'Game' ? (
          <ButtonRight
            onClick={handleNextButtonClick}
            disabled={!isAnswerCorrect}
            isAnswerCorrect={isAnswerCorrect}
          >
            Next
          </ButtonRight>
        ) : (
          <ButtonTest to="/bigtest" state={{ productname: productName }} >Next</ButtonTest>
          
        )}
      </ButtonsContainer>
      
      {isFireWork === false && <Text1>Bạn đã chọn sai</Text1>}
    </>
  );
};

export default LayoutLearn;

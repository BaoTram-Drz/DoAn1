import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";
import datas from '../data.json'


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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
  text-align: center;
  width: 15%;
  margin-top: -7%;
  margin-bottom: 5%;

  @media (max-width: 1200px) {
    margin-top: -5%;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 5px 12px;
    font-size: 1rem;
    border-width: 2px;
  }
  @media (max-width: 280px) {
    width: 40%;
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
        //const learnData = await getLearns();
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
      <BigText>BigTest</BigText>   
      <HeadersContainer>
        <Header>Test</Header>        
        <Header>4/4</Header>
      </HeadersContainer>
        
        {data.map((item) => {
            if (data.includes(item.id)) {
            return null;
            }
            return (
                <>
                    {item?.category === 'Game1' && <Game1  data={item} onSelectAnswer={handleAnswerSelected}/>} 
                    {item?.category === 'Game2' && <Game2  data={item} onSelectAnswer={handleAnswerSelected}/>}
                    {item?.category === 'Game3' && <Game3  data={item} onSelectAnswer={handleAnswerArray}/>}
                    {item?.category === 'Game4' && <Game4  data={item} onSelectAnswer={handleAnswerSelected}/>} 
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

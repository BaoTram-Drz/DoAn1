import React, { useState, useEffect } from "react";
import styled, {css} from "styled-components";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Particless from "./Particles/Particles ";
import A from './image/A.png'
import B from './image/B.png'
import C from './image/C.png'
import D from './image/D.png'


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

const PreButton = styled.button`
    width: 200px;
    padding: 5px 24px;
    font: normal 400 2rem "Autour One";
    color: #ffc24b;
    background-color: white;
    border: 3px solid #f47068;
    border-radius: 20px;
`;
const Button = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color:  ${({ isFinish }) => (isFinish ? "#ffc24b" : "gray")};
  background-color: white;
  border: 3px solid ${({ isFinish }) => (isFinish ? "#f47068" : "gray")};
  border-radius: 20px;
  cursor: ${({ isFinish }) => (isFinish ? "pointer" : "not-allowed")};
`;

const ButtonTest = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: ${({ isFinish }) => (isFinish ? "#f47068" : "gray")};
  border: 3px solid #f47068;
  border-radius: 20px;
  cursor: ${({ isFinish }) => (isFinish ? "pointer" : "not-allowed")};
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

const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px 'Autour One';
`;
const TableWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableRow = styled.tr`
  background-color: white;
`;
const TableCell = styled.div`
    margin: 2% 10%;  
    padding: 5px 24px;
    font: normal 400 28px 'Autour One';
    color: #0E606B;
    text-align: center;
    border: 2px dashed #0e606b;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
    ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    `}
`;
const ImageAns = styled.img`
    width: 40px;
    height: 40px;
    margin: auto 10px;
`;

const Game1Test = () => {
    const location = useLocation();
    const [productName, setProductName] = useState('Product A');
    const [lesson, setLesson] = useState('1');
    const [userAns, setUserAns] = useState(null);
    const [isFinish, setIsFinish] = useState(false);

    // const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [message, setMessage] = useState("");

    useEffect(() => {
        if (location.state && location.state.productname) {
            setProductName(location.state.productname);
        }
        if (location.state && location.state.lesson) {
            setLesson(location.state.lesson);
        }
    }, [location.state]);

    console.log(productName, lesson);
    const data = {  
        kind: "Game",   
        category: "Game1",
        lesson: 1,
        lessonTitle: "Lesson 1",
        question: "How old are you?",
        answerOptions: [
        { id: "A", text: "I am Lily" },
        { id: "B", text: "I am a student" },
        { id: "C", text: "I love my bag" },
        { id: "D", text: "I am ten" },
        ],
        correctAnswer: "D",
        state: "unfinished",
    }

    // useEffect(() => {
    //     // Lấy dữ liệu từ cơ sở dữ liệu và set vào state
    //     fetchDataFromDatabase()
    //     .then((response) => setData(response))
    //     .catch((error) => console.error(error));
    // }, []);

    // // Hàm lấy dữ liệu từ cơ sở dữ liệu (giả sử là API)
    // const fetchDataFromDatabase = () => {
    //     return new Promise((resolve, reject) => {
    //     // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy dữ liệu
    //     // Giả sử dữ liệu trả về là một mảng các đối tượng
    //     const data = {     
    //         category: "Game1",
    //         lesson: 1,
    //         lessonTitle: "Lesson 1",
    //         question: "What is the correct form of the verb?",
    //         answerOptions: [
    //         { id: "A", text: "Option A" },
    //         { id: "B", text: "Option B" },
    //         { id: "C", text: "Option C" },
    //         { id: "D", text: "Option D" },
    //         ],
    //         correctAnswer: "A",
    //     }
        
    //     resolve(data);
    //     });
    // };

    const handleClickAns = (answer) => {
        setUserAns(answer);
    };
    const handleClickSub = () => {
        if (userAns === data.correctAnswer) {
            setMessage("Chúc mừng! Bạn đã chọn đúng đáp án.");
            data.state = 'finished';
            setIsFinish(true);
        } else {
            setMessage("Sai");
        }
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
        <Header>{data.kind}</Header>
        <Header>{data.lessonTitle}</Header>
        <Header>{data.lesson}/10</Header>
        </HeadersContainer>
            
        <Answers>{data.question}</Answers>
        <TableWrapper>
            <Table>
            <tbody>
                <TableRow>
                <td>
                    <TableCell 
                        onClick={() => handleClickAns(data.answerOptions[0].id)}
                        isActive={userAns === data.answerOptions[0].id}
                    >
                    <ImageAns src={A} alt="A" /> 
                    {data.answerOptions[0].text}
                    </TableCell>
                </td>
                <td>
                    <TableCell 
                        onClick={() => handleClickAns(data.answerOptions[1].id)}
                        isActive={userAns === data.answerOptions[1].id}
                    >
                    <ImageAns src={B} alt="B" /> 
                    {data.answerOptions[1].text}
                    </TableCell>
                </td>
                </TableRow>
                <TableRow>
                <td>
                    <TableCell 
                        onClick={() => handleClickAns(data.answerOptions[2].id)}
                        isActive={userAns === data.answerOptions[2].id}
                    >
                    <ImageAns src={C} alt="C" /> 
                    {data.answerOptions[2].text}
                    </TableCell>
                </td>
                <td>
                    <TableCell 
                        onClick={() => handleClickAns(data.answerOptions[3].id)}
                        isActive={userAns === data.answerOptions[3].id}
                    >
                    <ImageAns src={D} alt="D" /> 
                    {data.answerOptions[3].text}
                    </TableCell>
                </td>
                </TableRow>
            </tbody>
            </Table>
        </TableWrapper>
        {message && <p>{message}</p>}
        {isFinish &&  <Particless/> }

            
        <ButtonsContainer>
            <PreButton onClick={handlePrevButtonClick}>Pre</PreButton>
            <SubButton onClick={handleClickSub}>Submit</SubButton>
            {
            data.kind === 'BigTest' ? (
                <ButtonTest isFinish={isFinish} to="/bigtest" >Next</ButtonTest>
            ) : (
                <Button isFinish={isFinish} onClick={handleNextButtonClick}>Next</Button>
            )
            }
        </ButtonsContainer>

        
        </>
    
    );
};

export default Game1Test ;

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase/firebase'
import { useState, useEffect } from 'react';
import { ref } from 'firebase/storage'
import { getCoursesVocab, getCoursesRead, getCoursesListen, getCoursesUser } from '../../../API/coursesApi';
import Game6 from '../../Game/MiniGame';
import sintel from './sintel.jpg'
import listen2 from './listen2.jpg'
import listen3 from './listen3.jpg'
import story1 from './story1.jpg'
import story2 from './story2.jpg'
import story3 from './story3.jpg'

const Container = styled.div`

`;

const CoursesName = styled.div`
  width: 50%;
  height: 150px;
  margin: 10% auto 2% auto;
  background: #FFFFFF;
  border: 5px dashed #FFC24B;
  border-radius: 100px;
  text-align: center;
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    width: 70%;
    height: 150px;
  }
  @media (max-width: 540px) {
    width: 70%;
    height: 120px;
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 100px;
  }
  @media (max-width: 300px) {
    width: 90%;
    height: 80px;
  }
`;

const CoursesNameText = styled.p`
  margin-top: 5%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 45px;

  color: #F47068;
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 540px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
`;

const CoursesTopicNameText = styled.p`
  margin: 5% 5% 0% 5%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 45px;

  color: #0e606b;
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
`;

const CardListContainer = styled.div`
  width:80%;
  margin: auto auto 10% auto;
  padding-top: 50px;
  gap: 50px;

  .slick-slider {
    display: flex;
    align-items: center;
  }

  .slick-list {
    width: 100%;
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    margin: 0 25px;
  }
`;

const Card = styled.div`
  height: 540px;
  background-image: linear-gradient(#ffb3ae, #FFF4F1);
  border: 1px solid #ffc24b;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 912px) {
    height: 420px;
  }
  @media (max-width: 480px) {
    height: 370px;
  }
  @media (max-width: 300px) {
    height: 300px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  margin: 10% auto 5% auto;
  width: 70%;
  height: calc(50%);
  background: #FFFFFF;
  border: 5px dashed #FFC24B;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});

  transition: all 0.5s;
  
  ${Card}:hover & {
    border-radius: 20px;
    background-image: url(${props => props.imageUrl});
  }

  @media (max-width: 1200px) {
    height: calc(50%);
  }
  @media (max-width: 912px) {
    height: 160px;
  }
  @media (max-width: 540px) {
    width: 70%;
    height: 170px;
  }
  @media (max-width: 480px) {
    height: 160px;
  }
  @media (max-width: 300px) {
    width: 80%;
    height: 120px;
  }
`;

const Img = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 50%;
  transition: all 0.5s;

  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;

  ${Card}:hover & {
    border-radius: 20px;
  }
`;

const Name = styled.h2`
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  color: #0E606B;

  @media (max-width: 1200px) {

  }
  @media (max-width: 912px) {
    font-size: 1.7rem;
  }
  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  margin-left: 12px;
  margin-right: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #1697A6;
  @media (max-width: 300px) {
    font-size: 0.7rem;
  }
`;

const PrevButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const NextButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LearnBtn = styled(Link)`
    width: 100%;
    min-width: 200px;
    margin: auto;
    padding: 5px 24px;
    text-decoration: none;
    font: normal 400 2rem "Autour One";
    background: #F47068;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    @media (max-width: 1200px) {

    }
    @media (max-width: 912px) {
      font-size: 1.7rem;
    }
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
const PrevArrow = (props) => (
  <PrevButton {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </PrevButton>
);

const NextArrow = (props) => (
  <NextButton {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </NextButton>
);
function CardList() {
  const [coursesVocab, setCoursesVocab] = useState([]);  
  const [coursesRead, setCoursesRead] = useState([]); 
  const [coursesListen, setCoursesListen] = useState([]); 
  const [coursesUser, setCoursesUser] = useState([]);   
  const [miniGame, setMiniGame] = useState([]); 
  const [isUser, setIsUser] = useState(true);
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 600 ? 1 : window.innerWidth < 1000 ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  });

  useEffect(() => {
    const handleResize = () => {
      setSliderSettings(prevState => ({
        ...prevState,
        slidesToShow: window.innerWidth < 600 ? 1 : window.innerWidth < 1000 ? 2 : 3,
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseUserList = await getCoursesVocab(); 
        for (let i = 0; i < courseUserList.length; i++) {
          const path = 'courses/' + courseUserList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseUserList[i].image = downloadURL;   
        }
        setCoursesUser(courseUserList);      

      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseVocabList = await getCoursesVocab();

        for (let i = 0; i < courseVocabList.length; i++) {
          const path = 'courses/' + courseVocabList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseVocabList[i].image = downloadURL;     
        }
        setCoursesVocab(courseVocabList);  

        courseVocabList[0].des ="Chơi mini game để luyện tập từ vựng về FRUITS"
        courseVocabList[1].des ="Chơi mini game để luyện tập từ vựng về KITCHEN"
        courseVocabList[2].des ="Chơi mini game để luyện tập từ vựng về ASTRONOMY"
        const image = courseVocabList[0].image;
        courseVocabList[0].image = courseVocabList[1].image;
        courseVocabList[1].image = courseVocabList[2].image;
        courseVocabList[2].image = image;
        
        courseVocabList[0].name ="FRUITS"
        courseVocabList[1].name ="KITCHEN"
        courseVocabList[2].name ="ASTRONOMY"
        setMiniGame(courseVocabList)

      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseReadList = await getCoursesVocab(); 

        for (let i = 0; i < courseReadList.length; i++) {
          const path = 'courses/' + courseReadList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseReadList[i].image = downloadURL;   
        }
        courseReadList[0].image = story1;          
        courseReadList[1].image = story2;          
        courseReadList[2].image = story3;   
        courseReadList[0].name = "The Lion & Mouse";          
        courseReadList[1].name = "The three fishes";          
        courseReadList[2].name = "The frog prince";  
        courseReadList[0].des = "Câu chuyện chú sư tử và chú chuột";          
        courseReadList[1].des = "Câu chuyện về 3 chú cá";          
        courseReadList[2].des = "Câu chuyện về hoàng tử ếch";  
        setCoursesRead(courseReadList);      

      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseListenList = await getCoursesVocab(); 
        for (let i = 0; i < courseListenList.length; i++) {
          const path = 'courses/' + courseListenList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseListenList[i].image = downloadURL;   
        }
        courseListenList[0].image = sintel;          
        courseListenList[1].image = listen2;          
        courseListenList[2].image = listen3;   
        courseListenList[0].name = "Adventure";          
        courseListenList[1].name = "Moana";          
        courseListenList[2].name = "Frozen";  
        courseListenList[0].des = "Luyện nghe 1 đạn ngắn về câu chuyện Cuộc phiêu lưu";          
        courseListenList[1].des = "Luyện nghe 1 đạn ngắn về câu chuyện Moana";          
        courseListenList[2].des = "Luyện nghe 1 đạn ngắn về câu chuyện Frozen";  
        setCoursesListen(courseListenList);      

      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);
  

  
  return (
    <Container>
      <CoursesName>
        <CoursesNameText>Courses for You</CoursesNameText>
      </CoursesName>

      { isUser ? (
        <>
          <CoursesTopicNameText> - Suggestions for you - </CoursesTopicNameText>
          <CardListContainer>
          <Slider {...sliderSettings}>
            {coursesUser.map((item, index) => (
              <Card key={index}>
                <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                </ImgContainer>
                <Name>{item.name}</Name>
                <Description>{item.des}</Description>
                <LearnBtn
                  to={
                    '/coursesinfo'
                    }
                  state= { {productname: item.name, image: item.image, lessonType: item.lessonType }}
                >
                  Learn
                </LearnBtn>
              </Card>
            ))}
          </Slider>
          </CardListContainer>
        </>
       
        ) : ( null )}
      
      <CoursesTopicNameText> - Learning Vocabulary - </CoursesTopicNameText>
      <CardListContainer>
        <Slider {...sliderSettings}>
          {coursesUser.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>{item.des}</Description>
              <LearnBtn
                to={
                 '/coursesinfo'
                  }
                state= { {productname: item.name, image: item.image, lessonType: item.lessonType }}
              >
                Learn
              </LearnBtn>
            </Card>
          ))}
        </Slider>
      </CardListContainer>

      <CoursesTopicNameText> - Read stories - </CoursesTopicNameText>
      <CardListContainer>
        <Slider {...sliderSettings}>
          {coursesRead.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>{item.des}</Description>
              <LearnBtn
                to={
                 '/coursesinfo'
                  }
                state= { {productname: item.name, image: item.image, lessonType: item.lessonType }}
              >
                Learn
              </LearnBtn>
            </Card>
          ))}
        </Slider>
      </CardListContainer>

      <CoursesTopicNameText> -  Listen stories - </CoursesTopicNameText>
      <CardListContainer>
        <Slider {...sliderSettings}>
          {coursesListen.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>{item.des}</Description>
              <LearnBtn
                to={
                 '/coursesinfo'
                  }
                state= { {productname: item.name, image: item.image, lessonType: item.lessonType }}
              >
                Learn
              </LearnBtn>
            </Card>
          ))}
        </Slider>
      </CardListContainer>

      <CoursesTopicNameText> -  Mini Game - </CoursesTopicNameText>
      <CardListContainer>
        <Slider {...sliderSettings}>
          {miniGame.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name} GAME</Name>
              <Description>{item.des}</Description>
              <LearnBtn
                to={
                 '/minigame'
                  }
                state= { {productname: item.name }}
              >
                Play
              </LearnBtn>
            </Card>
          ))}
        </Slider>
      </CardListContainer>

    </Container>
  );
}

export default CardList;
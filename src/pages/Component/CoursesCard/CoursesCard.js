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
import { getCourses } from '../../../API/coursesApi';

const Container = styled.div`

`;

const CoursesName = styled.div`
  width: 50%;
  height: 150px;
  margin: 15% auto 3% auto;
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

const CardListContainer = styled.div`
  width:80%;
  margin: auto;
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
  const [courses, setCourses] = useState([]);  
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
        const courseList = await getCourses();

        for (let i = 0; i < courseList.length; i++) {
          const path = 'courses/' + courseList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseList[i].image = downloadURL;
        }
        
        setCourses(courseList);
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
      <CardListContainer>
        <Slider {...sliderSettings}>
          {courses.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>{item.des}</Description>
              <LearnBtn
                to={
                 '/coursesinfo'
                  }
                state= { {productname: item.name, image: item.image }}
              >
                Learn
              </LearnBtn>
            </Card>
          ))}
        </Slider>
      </CardListContainer>
    </Container>
  );
}

export default CardList;
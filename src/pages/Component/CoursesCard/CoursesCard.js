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
`;

const CoursesNameText = styled.p`
  margin-top: 5%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 45px;

  color: #F47068;
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
  width: 30%;
  height: 500px;
  background-image: linear-gradient(#ffb3ae, #FFF4F1);
  border: 1px solid #ffc24b;
  border-radius: 20px;
  text-align: center;
`;


const ImgContainer = styled.span`
  display: flex;
  margin: 10% auto;
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
`;

const Description = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #1697A6;
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
`;
function CardList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5001/api/courses/getCourses');
        const result = await response.json();

        for (let i = 0; i < result.length; i++) {
          const downloadURL = await getDownloadURL(ref(storage, result[i].image));
          result[i].image = downloadURL;
        }

        setCourses(result);
      } catch (error) {
        console.log('Error:', error);
      }
    }

    fetchData();
  }, []);

  //   [    
  //     {      
  //     name: 'Product A',      
  //     image: 'https://via.placeholder.com/200x200.png',      
  //     des: 'This is product A description',    
  //   },    
  //     {      
  //     name: 'Product B',      
  //     image: 'https://via.placeholder.com/200x200.png',      
  //     des: 'This is product B description',    
  //   },    
  //     {      
  //     name: 'Product C',      
  //     image: 'https://via.placeholder.com/200x200.png',      
  //     des: 'This is product C description',    
  //   },    
  //     {      
  //     name: 'Product B',      
  //     image: 'https://via.placeholder.com/200x200.png',      
  //     des: 'This is product B description',    
  //   },    
  //     {      
  //     name: 'Product C',      
  //     image: 'https://via.placeholder.com/200x200.png',      
  //     des: 'This is product C description',    
  //   },   
  // ];

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Container>
      <CoursesName>
        <CoursesNameText>Courses for You</CoursesNameText>
      </CoursesName>
      <CardListContainer>
        <Slider {...settings}>
          {courses.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>{item.des}</Description>
              <LearnBtn
                to={{
                  pathname: '/coursesinfo',
                  state: { productname: item.name },
                }}
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
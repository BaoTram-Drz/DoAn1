import React from 'react';
import styled from 'styled-components';
import CardList from '../Component/CoursesCard/CoursesCard';

import About from '../About/About';
import Contact from '../Contact/Contact';
import { Element } from 'react-scroll';
import Carousel from '../Component/Carousel/Carousel';
import CircleComponent from '../../Bubble/WordDrop';
import Fireworks from '../Game/FireWorks';

// import Cube from '../Component/TestThree/Testthree';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  margin: auto;
`;

const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

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
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1rem;
  }
`;
const BigText2 = styled.p`
  margin: 6% auto 3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1rem;
  }
`;

function Home() {
    return (
        <Container>
            <BigText>Welcome to Engplaygrond</BigText>
            {/* <CircleComponent/> */}
            {/* <Fireworks/> */}
            <Carousel/>          
            <Element name="about-section">
                <About />
            </Element>
            <Element name="courses-section">
                <CardList/>
            </Element>
            <Element name="contact-section">
                <Contact/>
            </Element>

            <BigText2>Thanks for visited</BigText2>
            
        </Container>
    );
};

export default Home;
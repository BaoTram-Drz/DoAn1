import React from 'react';
import styled from 'styled-components';
import CardList from '../Component/CoursesCard/CoursesCard';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Element } from 'react-scroll';
import Carousel from '../Component/Carousel/Carousel';
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
`;
const BigText2 = styled.p`
  margin: 6% auto 3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

function Home() {
    return (
        <Container>
            <BigText>Welcome to Engplaygrond</BigText>
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
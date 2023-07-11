import React from 'react';
import styled from 'styled-components';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Carousel from '../Component/Carousel/Carousel';
import {CiRainbow} from 'react-icons/ci'


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
        <BigText><CiRainbow/> Welcome to Engplaygrond <CiRainbow/></BigText>
        <Carousel/>          
        <About />
        <Contact/>
        <BigText2>Thanks for visited</BigText2>            
    </Container>
    );
};

export default Home;
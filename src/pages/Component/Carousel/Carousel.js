import React from 'react';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';
import slide5 from './images/slide5.png';

const SlideshowContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6%;
  height: 600px;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
  @media (max-width: 480px) {
    gap: 3px;
  }
`;
const Slideshow = styled.div`
  min-width: 15%;
  position: relative;
  flex: 1;
  border-radius: 1rem;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transition: all 0.8s cubic-bezier(.25,.4,.45,1);

  &.active {
    transition: 1.8s;
    flex: 5;
    &::before {
      background-color: rgba(128, 128, 128, 0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(128, 128, 128, 0.5); /* Màu xám gần trong suốt */
    z-index: 1;
    border-radius: 1rem;
  }

  > div {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1300px) {
    height: 500px;
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 912px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 540px) {
    height: 250px;
  }
  @media (max-width: 480px) {
    height: 200px;
    border-radius: 0.5rem;
    &::before {      
      border-radius: 0.5rem;
    }
  }
  @media (max-width: 300px) {
    height: 150px;    
  }
`;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  width: 40%;
  min-width: 100px;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 10px;
  font-family: 'Bungee Inline', cursive;
  color: #FFC24B;
  background-color: #fff4f1;
  border: 2px dashed #FFC24B;
  border-radius: 1rem;

  @media (max-width: 1300px) {
    width: 80%;
    min-width: 50px;
    font-size: 1rem;
  }
  @media (max-width: 912px) {
    width: 80%;
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.5rem;
    border-radius: 0.5rem;
    padding: 3px 5px;
  }
  @media (max-width: 540px) {
    width: 90%;
    font-size: 0.5rem;
  }
  @media (max-width: 300px) {
    width: 100%;
    font-size: 0.3rem;
    padding: 1px 1px;  
  }
`;


function handleClick(e) {
  const target = e.target;
  const div = target.closest("div");
  if (div) {
    div.classList.add("active");
  }
}

function handleMouseLeave(e) {
  const target = e.target;
  const div = target.closest("div");
  if (div) {
    div.classList.remove("active");
  }
}
const Carousel = () => {

  return (
    <SlideshowContainer bgImage={slide2}>
      <Slideshow bgImage={slide1}
        onMouseLeave={handleMouseLeave}
      >
          <Button onClick={handleClick}>Click Me</Button>
      </Slideshow>
      <Slideshow bgImage={slide2}
        onMouseLeave={handleMouseLeave}
      >
          <Button onClick={handleClick}>Click Me</Button>
      </Slideshow>
      <Slideshow bgImage={slide3}
        onMouseLeave={handleMouseLeave}
      > 
          <Button onClick={handleClick}>Click Me</Button>
      </Slideshow>
      <Slideshow bgImage={slide4}
       onMouseLeave={handleMouseLeave}
      > 
          <Button onClick={handleClick}>Click Me</Button>
      </Slideshow>
      <Slideshow bgImage={slide5}
        onMouseLeave={handleMouseLeave}
      > 
          <Button onClick={handleClick}>Click Me</Button>
      </Slideshow>

    </SlideshowContainer>
  );
};

export default Carousel;

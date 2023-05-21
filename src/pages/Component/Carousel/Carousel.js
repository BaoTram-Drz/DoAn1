import React from 'react';
import { useState, useEffect} from 'react';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';
import slide5 from './images/slide5.png';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase/firebase'
import { ref } from 'firebase/storage'

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



let vocabs = [];

function getVocabulary(index) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:5001/api/vocabulary/getVocab', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        vocabs = result;
        console.log('Hình của Vocab nè:', vocabs[index].image);
        resolve(vocabs[index].image);
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

const Carousel = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [slide1, slide2, slide3, slide4, slide5];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  const handleSlideClick = (e) => {
    setIsPaused(true);
  };
  
  const handleSlideMouseLeave = (e) => {
    setIsPaused(false);
  };

  return (
    <SlideshowContainer bgImage={slide2}>
      {slides.map((slide, index) => (
        <Slideshow
          key={index}
          bgImage={slide}
          onMouseLeave={handleSlideMouseLeave}
          className={index === activeSlide ? 'active' : ''}
          onClick={handleSlideClick}
        >
        </Slideshow>
      ))}

    </SlideshowContainer>
  );
};

export default Carousel;

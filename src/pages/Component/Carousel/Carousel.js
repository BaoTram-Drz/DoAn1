import React from 'react';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

const SlideshowContainer = styled.div`
  display: flex;
  margin-top: 6%;
  height: 20%;
  gap: 10px;

  > div {
    position: relative;
    flex: 1;
    border-radius: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    transition: all 0.8s cubic-bezier(.25,.4,.45,1);

    &.active {
      flex: 5;
      &::before {
        background-color: rgba(128, 128, 128, 0); /* Xóa lớp màu xám gần trong suốt */
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
  }
`;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  width: 30%;
  bottom: 20%;
  left: 35%;
  right:35%;
  padding: 5px 10px;
  font-family: 'Bungee Inline', cursive;
  color: #1697a6;
  background-color: #fff4f1;
  border: none;
  border-radius: 1rem;


`;

// const images = {
//   image1: URL('./images/1_day.png'),
//   image2: require('./path/to/image2.jpg').default,
//   image3: require('./path/to/image3.jpg').default,
//   image4: require('./path/to/image4.jpg').default,
//   image5: require('./path/to/image5.jpg').default,
// };

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
    <SlideshowContainer>
      <div style={{ 
        backgroundImage: `url('./images/1_day.png')` }}
        onMouseLeave={handleMouseLeave}
        >
          <Button onClick={handleClick}>Click Me</Button>
      </div>
      <div style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80")` }}
        onMouseLeave={handleMouseLeave}
        >
          <Button onClick={handleClick}>Click Me</Button>
      </div>
      <div style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")` }}
        onMouseLeave={handleMouseLeave}
        > 
          <Button onClick={handleClick}>Click Me</Button>
      </div>
      <div style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80")` }}
        onMouseLeave={handleMouseLeave}
        > 
          <Button onClick={handleClick}>Click Me</Button>
      </div>
      <div style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")` }}
        onMouseLeave={handleMouseLeave}
        > 
          <Button onClick={handleClick}>Click Me</Button>
      </div>
      {/* {images.map((image, index) => (
          <div key={index} style={{ 
          backgroundImage: {image} }}
          onMouseLeave={handleMouseLeave}
        >
            <Button onClick={handleClick}>Click Me</Button>
          </div>
        ))} 
        */}
    </SlideshowContainer>
  );
};

export default Carousel;

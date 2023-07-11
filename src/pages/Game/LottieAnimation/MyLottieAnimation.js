import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';
import animationData from './53513-confetti.json'; // Thay đổi đường dẫn tới tệp JSON


const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const MyLottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData
    });
  }, []);

  return (
    <Container ref={animationContainer}></Container>
  );
};

export default MyLottieAnimation;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage'
import { storage } from '../../firebase/firebase'

const BigText = styled.div`
  margin: 7% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    margin: 15% auto;
    font-size: 2.5rem;
  }

  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  width: 60%;
  margin: -5% auto 5% auto;
  border: 5px solid #1697a6;
  border-radius: 50px;
  font-family: 'Autour One';
  font-weight: 400;
  font-size: 20px;
  overflow: hidden;

  .video-react-button {
    border-radius: 50px;
    background-color: #f47068;
    color: #ffffff;
  }

  @media (max-width: 1100px) {
    width: 80%;
    margin: 2% auto;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 2% auto;
  }
`;

const Video = styled.video`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: auto;
`;

const ListenStory = () => {    
  const [productName, setProductName] = useState('Product A');
  const [video, setVideo] = useState(); 
  const location = useLocation(); 

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const path = 'video/' + 'Baymax.mp4';
        const downloadURL = await getDownloadURL(ref(storage, path));
        console.log(downloadURL);
        setVideo(downloadURL); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <>
      <BigText>Listen Story - {productName}</BigText>
      <VideoContainer>
        <Video source src={video} autoPlay controls /> 
      </VideoContainer>
    </>
  );
};

export default ListenStory;

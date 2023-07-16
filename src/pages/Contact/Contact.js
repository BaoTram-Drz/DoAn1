import { React, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import CustomMap from './Map/Map'
import { createGlobalStyle } from 'styled-components';
import { SnackBarContext } from "../../App";
import emailjs from '@emailjs/browser';
import color_constants from '../../color';
//const nodemailer = require('nodemailer');


const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  margin: 10% auto;
  background: #FFF4F1;
  border: 5px solid #1697A6;
  border-radius: 50px;

  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 70%;
  margin-left: 2rem;
  @media (max-width: 415px) {
    width: 100%;
    margin: auto;
  }
`;

const FormTitle = styled.h1`
  position: relative; 
  margin: 10% auto -12% 20%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  color: #FFC24B;
  text-shadow:
    -7px -7px 0 #fff, /* Viền trắng bên trái trên */
     7px -7px 0 #fff, /* Viền trắng bên phải trên */
    -7px  7px 0 #fff, /* Viền trắng bên trái dưới */
     7px  7px 0 #fff;

  @media (max-width: 415px) {
    font-size: 2rem;
    text-shadow:
    -4px -4px 0 #fff, /* Viền trắng bên trái trên */
     4px -4px 0 #fff, /* Viền trắng bên phải trên */
    -4px  4px 0 #fff, /* Viền trắng bên trái dưới */
     4px  4px 0 #fff;
  }

`;

const Title = styled.p`
  width: 80%;
  margin-bottom:0.5rem;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
  text-shadow: 0 0 10px white;
`;

const FormInput = styled.input`
  width: 80%;
  height: 80px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed #FFC24B;
  border-radius: 20px;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
`;

const FormTextArea = styled.textarea`
  width: 80%;
  height: 180px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed #FFC24B;
  border-radius: 20px;

  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
`;

const SubButton = styled.button`
  width: 80%;
  height: 80px;
  padding: 0.8rem;
  margin: 5% auto 0 auto;
  background: #ffc24b;
  border: none;
  border-radius: 2rem;
  text-align: center;
  
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFFFFF;

  @media (max-width: 540px) {
   
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }

`;
const GlobalStyle = createGlobalStyle`
  .leaflet-red-icon {
    width: 25px;
    height: 41px;
    background-image: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png');
    background-size: 25px 41px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 80%;
  height: 80%;
  min-height: 300px;
  margin: auto auto 2rem auto;
  background: #FFFFFF;
  border: 3px dashed #1697A6;
  border-radius: 50px;
  z-index: 1;
  @media (max-width: 415px) {
    width: 90%;
  }
`;

function ContactForm() {
  const [message, setContent] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_name, setUsername] = useState('');
  const handleOpenSnackbar = useContext(SnackBarContext);

  const form = useRef();

  const sendEmail = (e) => {
    const green_color = '#b7efb7';
    const red_color = '#ff6230';
    const yellow_color = '#dcdcaa';
    e.preventDefault();

    emailjs.sendForm('service_sd16yvc', 'template_7rj7oah', form.current, 'qm6ilYQAuidMm9QOz')
      .then((result) => {
        console.log(result.text);
        handleOpenSnackbar(color_constants.green_color, 'Success', 3000);
      })
      .catch((error) => {
        console.log(error.text);
        handleOpenSnackbar(color_constants.red_color, 'Failor', 3000);
      });
  };

  return (
    <>
      <GlobalStyle />
      <FormTitle>Contact Us</FormTitle>
      <FormContainer>
        <FormStyled ref={form} onSubmit={sendEmail}>
          <Title>Your name:</Title>
          <FormInput
            type="text"
            value={user_name}
            onChange={(e) => setUsername(e.target.value)}
            name="user_name"
          />

          <Title>Your email:</Title>
          <FormInput
            type="email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
          />

          <Title>Your message:</Title>
          <FormTextArea
            type="text"
            value={message}
            onChange={(e) => setContent(e.target.value)}
            name="message"
          />

          <SubButton type="submit">Send</SubButton>
        </FormStyled>
        <ImageContainer>
          <CustomMap />
        </ImageContainer>
      </FormContainer>
    </>
  );
}

export default ContactForm;

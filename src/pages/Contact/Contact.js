import React from 'react';
import styled from 'styled-components';
import CustomMap from './Map/Map'
import { createGlobalStyle } from 'styled-components';

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
  position: absolute; 
  margin: 0% auto auto 20%;
  transform: translate(0, -50%);
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
  return (
      <>
        <GlobalStyle />
        <FormTitle>Contact Us</FormTitle>
        <FormContainer>
          <FormStyled>        
            <Title>Your name:</Title>
            <FormInput type="text"/>
            <Title>Your email:</Title>
            <FormInput type="email"/>
            <Title>Your message:</Title>
            <FormTextArea/>
            <SubButton type="submit">Send</SubButton>
          </FormStyled>
          <ImageContainer>
            <CustomMap/>
          </ImageContainer>
        </FormContainer>
      </>
  );
}

export default ContactForm;

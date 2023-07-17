import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import image from './image.png'
import emailjs from '@emailjs/browser';
import { SnackBarContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import color_constants from '../../color';
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;
const Image = styled.div`
  width: 80%;
  height: 500px;
  float: left;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  margin: auto auto auto 10%;
  box-shadow: 50px 50px 100px 120px #fffaee;
  @media (max-width: 1280px) {
    width: 60%;
    margin: 10% auto auto auto;
  }
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 912px) {
    width: 80%;
    height: 400px ;
  }
  @media (max-width: 540px) {
    width: 100%;
    height: 350px ;
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 300px ;
  }
  @media (max-width: 412px) {
    width: 90%;
    margin: 15% auto auto auto;
    height: 260px ;
  }
`;
const FormWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 20% auto 10% 0;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  gap: 0.5em;
  @media (max-width: 1280px) {
    width: 60%;
    margin: auto auto 5% auto;
  }
  @media (max-width: 912px) {
    width: 80%;
  }
  @media (max-width: 540px) {
    width: 90%;
  }
  @media (max-width: 412px) {
    width: 100%;
  }
`;
const BigText = styled.label`
  margin: 10% ;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 2rem;
  color: #FFC24B;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Input = styled.input`
  width: 80%;
  height: 55px;
  margin-top: 2%;
  background: #DBDBDB;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  ::placeholder {
    color: #FFFFFF;
    font-family: 'Autour One';
    font-size: 1.5rem;
    padding-left: 1rem;
  }
`;
const InputNone = styled.input`
  display: none;
`;

const SendCodeButton = styled.button`
  width: 80%;
  height: 55px;
  margin: 8%;
  background: #FFC24B;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
const VerifyButton = styled.button`
  width: 80%;
  height: 55px;
  margin: 8% auto 15% auto;
  background: #FFC24B;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const LinkLoginBtn = styled(Link)`
  text-decoration: none;
  font-family: 'Autour One';
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 35px;
  color: #FFFFFF;
  text-shadow: 0px 0px 5px #0E606B;
`;

const Line = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #F47068;
`;


const Forgot = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();
  const handleOpenSnackbar = useContext(SnackBarContext);
  const form = useRef();
  const generateVerificationCode = () => {
    const characters = '0123456789';
    const length = 6;
    let code = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  };
  const sentCode = generateVerificationCode();
  const handleGetCode = async (e) => {
    e.preventDefault();
  
    setVerificationCode(sentCode)

    emailjs.sendForm('service_sd16yvc', 'template_wkb2fci', form.current, 'qm6ilYQAuidMm9QOz')
      .then((result) => {
        handleOpenSnackbar(color_constants.green_color, 'Sent code successfully', 3000);

      })
      .catch((error) => {
        handleOpenSnackbar(color_constants.red_color, 'Fail to sent code', 3000);
      });
  };

  const handleVerify = async () => {
    if(verificationCode === code){
      navigate('/verify')
      handleOpenSnackbar(color_constants.green_color, 'Verified successfully', 3000);
      localStorage.setItem('email', email);
    }
    else{
      handleOpenSnackbar(color_constants.red_color, 'Wrong code', 3000);
    }
  };

  return (
    <Container>
      <Image bgImage={image}></Image>
      <FormWrapper ref={form}>
        <BigText>Forgot Password</BigText>
        <Input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <InputNone name='code' value={sentCode} />
        <SendCodeButton onClick={handleGetCode}>
          <LinkLoginBtn>
            Send Code
          </LinkLoginBtn>
        </SendCodeButton>

        <Line>--------Get-code-before-verify--------</Line>
        <Input type="password" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your code" />
        <VerifyButton onClick={handleVerify}>
          <LinkLoginBtn state={{ userMail: email }}>
            Verify
          </LinkLoginBtn>
        </VerifyButton>
      </FormWrapper>
    </Container>
  );
};

export default Forgot;

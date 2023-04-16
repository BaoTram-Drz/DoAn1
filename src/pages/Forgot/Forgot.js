import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import image from './image.png'

const Image = styled.div`
  width: 45%;
  height: 500px;
  float: left;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  margin: auto auto auto 10%;
  box-shadow: 50px 50px 100px 120px #fffaee;
`;

const FormWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: calc(100% + 150px);
  margin: 9% 10% 4% auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  gap: 0.5em;
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
  return (
    <>
      <Image bgImage={image}></Image>
      <FormWrapper>
        <BigText>Forgot Password</BigText>
        <Input type="text" id="nome" name="nome"  placeholder="Email"/>
        <SendCodeButton>
          <LinkLoginBtn>
          Send Code
          </LinkLoginBtn>
        </SendCodeButton>
        <Line>--------Get-code-before-verify--------</Line>
        <Input type="email" id="email" name="email" placeholder="Your Code"/>
        <VerifyButton>
          <LinkLoginBtn  to="/verify">
          Verify
          </LinkLoginBtn>
        </VerifyButton> 
      </FormWrapper>
    </>
   
  );
};

export default Forgot;

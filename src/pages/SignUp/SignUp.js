import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {FaGooglePlusG} from 'react-icons/fa';


const FormWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: calc(100% + 150px);
  margin: 10% 10% 5% auto;
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

const SubmitButton = styled.button`
  width: 80%;
  height: 55px;
  margin: 8%;
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

const SubmitGGButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40px;
  margin: 5% auto 15% auto;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  color: #b54141;
  &:hover {
    background-color: #b54141;
  }
`;
const LinkLoginGG = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 1rem;
  color: #000000;
`;
const StyledFaGooglePlusG = styled(FaGooglePlusG)` 
  width: 30px;
  height: 30px;
  color: red;
`;

const SignUp = () => {
  return (
    <FormWrapper>
      <BigText>Sign Up</BigText>
      <Input type="text" id="nome" name="nome"  placeholder="Email"/>
      <Input type="email" id="email" name="email" placeholder="Password"/>
      <SubmitButton>
        <LinkLoginBtn  to="/">
        Sign Up
        </LinkLoginBtn>
      </SubmitButton> 
      <Line>--------------------or--------------------</Line>
      
      <SubmitGGButton><StyledFaGooglePlusG/><LinkLoginGG>&ensp;Continue with Google</LinkLoginGG></SubmitGGButton>
            {/*  set giá trị của header là có người dùng  */}
    </FormWrapper>
  );
};

export default SignUp;

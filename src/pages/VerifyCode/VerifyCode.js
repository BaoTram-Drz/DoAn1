import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


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
  margin: 15% ;
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
  margin-bottom: 8%;
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
  margin-top: 5%;
  margin-bottom: 20%;
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

const VerifyCode = () => {
  return (
    <FormWrapper>
      <BigText>verify</BigText>
      <Input type="text" id="nome" name="nome"  placeholder="Enter your pass"/>
      <Input type="email" id="email" name="email" placeholder="Enter your pass again"/>
      <SubmitButton>
        <LinkLoginBtn  to="/">
        Save
        </LinkLoginBtn>
      </SubmitButton> 
    </FormWrapper>
  );
};

export default VerifyCode;

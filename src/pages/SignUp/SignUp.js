import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {FaGooglePlusG} from 'react-icons/fa';
import image from './image.png'

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
const sendInfor = (username,password,email) => {
  const newUser = {
    username:username,
    password: password,
    email: email
  }
  fetch('http://localhost:5001/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.log('Error:', error);
  });
}
const signUpWithGoogle = ()=>{
  fetch('http://localhost:5001/api/users/testVoice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.log('Error:', error);
  });
}

const SignUp = () => {
  return (
    <Container>
      <Image bgImage={image}></Image>
      <FormWrapper>
        <BigText>Sign Up</BigText>
        <Input type="text" id="username" name="username"  placeholder="Username"/>
        <Input type="text" id="nome" name="nome"  placeholder="Password"/>
        <Input type="email" id="email" name="email" placeholder="Email"/>
        <SubmitButton>
          <LinkLoginBtn  to="/" onClick={()=>sendInfor(document.getElementById('username').value,
                                                        document.getElementById('nome').value,
                                                        document.getElementById('email').value)}>
          Sign Up
          </LinkLoginBtn>
        </SubmitButton> 
        <Line>--------------------or--------------------</Line>
        
        <SubmitGGButton onClick={()=>signUpWithGoogle()}
        ><StyledFaGooglePlusG/><LinkLoginGG>&ensp;Continue with Google</LinkLoginGG></SubmitGGButton>
              {/*  set giá trị của header là có người dùng  */}
      </FormWrapper>
    </Container>
   
  );
};

export default SignUp;

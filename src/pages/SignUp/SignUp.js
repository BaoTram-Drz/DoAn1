import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from 'react-icons/fa';
import image from './image.png'
import { saveNewUser, saveNewUserWithGG } from "../../API/signUpApi";
import { SnackBarContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import color_constants from '../../color';
//const toastr = require('toastr');
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
  font: normal 400 1.5rem "Roboto";
  color: white;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-left: 2rem;

  &:focus {
    outline: none;
    border: none;
  }
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
  margin: 8% auto 10% auto;
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



const signUpWithGoogle = async () => {
  try {
    const response = await saveNewUserWithGG();
    console.log('Success:', response);

  } catch (error) {
    console.log('Error:', error);

  }
}

function SignUpBtn(props) {
  const { email, username, password, repassword, bday, name } = props;
  const navigate = useNavigate();
  const handleOpenSnackbar = useContext(SnackBarContext);

  const sendInfor = async (email, username, password, repassword, bday, name) => {
    if (password === repassword) {
      const newUser = {
        username: username,
        name: name,
        password: password,
        email: email,
        dateofbirth: bday,
        image: "",
      };
      try {
        const response = await saveNewUser(newUser);
        console.log('Success:', response);
        navigate('/login')        
        handleOpenSnackbar(color_constants.green_color, 'Success', 3000);
      } catch (error) {
        console.log('Error:', error);
        handleOpenSnackbar(color_constants.red_color, 'Fail to Sign Up', 3000);
      }
    } else {
      alert(" password not same repassword !");
    }
  };
  return (
    <>
      <LinkLoginBtn
        onClick={(e) => {
          e.preventDefault();
          sendInfor(email, username, password, repassword, bday, name);
          handleOpenSnackbar('#66ff66', 'Success', 1000);
        }}
        href='/login'
      >
        Sign Up
      </LinkLoginBtn>
    </>
  )
}

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [bday, setBDay] = useState('');

  return (
    <Container>

      <Image bgImage={image}></Image>
      <FormWrapper>
        <BigText>Sign Up</BigText>
        {/* <div onClick={(e) => {
          handleOpenSnackbar('green', 'hello', 1000)
        }} style={{ background: 'red' }}>
          Hieu
        </div> */}
        <Input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name" placeholder="Your Name" />

        <Input type="date"
          value={bday}
          onChange={(e) => setBDay(e.target.value)}
          name="bday" placeholder="Date Of Birth" />

        <Input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username" placeholder="Username" />

        <Input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email" placeholder="Email" />

        <Input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="pass" placeholder="Password" />

        <Input type="password"
          value={repassword}
          onChange={(e) => setRePassword(e.target.value)}
          name="repass" placeholder="Re-Password" />


        <SubmitButton>
          <SignUpBtn
            name={name}
            email={email}
            username={username}
            password={password}
            repassword={repassword}
            bday={bday}
          />
        </SubmitButton>


        {/*  set giá trị của header là có người dùng  */}
      </FormWrapper>
    </Container>
  );
};

export default SignUp;

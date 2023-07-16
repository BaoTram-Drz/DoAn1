import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import login from './login.png';
import { loginUser } from "../../API/loginApi";
import { SnackBarContext } from "../../App";
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
    height: 400px;
  }
  @media (max-width: 540px) {
    width: 100%;
    height: 350px;
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: 412px) {
    width: 90%;
    margin: 15% auto auto auto;
    height: 260px;
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
  font: normal 400 1.5rem "Autour One";
  color: white;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
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

const LinkForgot = styled(Link)`
  align-self: flex-end;
  padding-right: 10%;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 28px;
  color: #F47068;
  text-decoration: none;
`;

const SubmitButton = styled.button`
  width: 80%;
  height: 55px;
  margin: 3%;
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
  line-height: 28px;
  color: #F47068;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const location = useLocation();
  const handleOpenSnackbar = useContext(SnackBarContext);

  const sendInfo = async (email, password) => {
    const user = {
      email: email,
      password: password
    };
    try {
      const response = await loginUser(user);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(response.user));
      console.log(response.user);
      console.log(localStorage);
      navigate('/home');
      // location.reload();
      handleOpenSnackbar(color_constants.green_color, 'Success', 3000);
    
    } catch (error) {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.setItem('user', '');
      console.log('Error:', error);      
      handleOpenSnackbar(color_constants.red_color, 'Failor', 3000);
    }
  };

  return (
    <Container>
      <Image bgImage={login} />
      <FormWrapper>
        <BigText>Welcome back</BigText>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <LinkForgot to="/forgot">Forgot Password</LinkForgot>
        <SubmitButton type="button" onClick={() => sendInfo(email, password)}>
          <LinkLoginBtn>Send</LinkLoginBtn>
        </SubmitButton>
        <Line>----------------- or -----------------</Line>
      </FormWrapper>
    </Container>
  );
};

export default Login;

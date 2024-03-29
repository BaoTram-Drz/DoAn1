import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import image from './image.png'
import {changePassword} from '../../API/changeInfoApi';
import { useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  // useEffect(() => {
  //   if (location.state && location.state.userMail) {
  //     setEmail(location.state.userMail);
  //   }
  // }, [location.state]);
  const navigate = useNavigate();
  const handleSaveNewPass = async () => {
    console.log(localStorage.getItem('email'));
    if(password === rePassword)
    {
      const newPassword = {
        email: localStorage.getItem('email'),
        password: password,
      };
      const response = await changePassword(newPassword);
      navigate('/login');
      alert('Change password successfully.');
    }  
  };

  return (
    <Container>
      <Image bgImage={image}></Image>
      <FormWrapper>
        <BigText>verify</BigText>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your pass"/>
        <Input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)}  placeholder="Enter your pass again"/>
        <SubmitButton onClick={handleSaveNewPass}>
          <LinkLoginBtn  to="/login">
          Save
          </LinkLoginBtn>
        </SubmitButton> 
      </FormWrapper>
    </Container>
   
  );
};

export default VerifyCode;

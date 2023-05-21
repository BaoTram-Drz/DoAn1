import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCarrot} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa';

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
`;
const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1rem;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  width: 80%;
  margin: 5% auto auto auto;
  overflow: hidden;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const ImageAcc = styled.img`
    width: 200px;
    height: 200px;
    padding: 3%;
    border: 2px dashed #ffc24b;
    border-radius: 50%;
`;
const Text =  styled.div`
  margin: 10% auto;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFC24B;
`;
const ButtonChange = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Title = styled.p`
  width: 80%;
  margin-bottom:0.5rem;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #ffb3ae;
  text-shadow: 0 0 10px white;
`;
const FormInput = styled.input`
  width: 90%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed gray;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFC24B;
  &:focus {
    outline: none;
  }
`;
const Left = styled.div`
  width: 100%;
  text-align: center;
`;
const Right = styled.div`
  width: 100%;
  text-align: right;
`;
const Carrot = styled(FaCarrot)`
  width: 30px;
  height: 30px;
  color:#ffc24b;
  cursor: pointer;
`;

const Table = styled.table`
  width: 90%;
  margin-left: auto;
  margin-right: 0;
  border-collapse: collapse;
`;
const TableCellLeft = styled.td`
  text-align: right;
`;

const TableCellRight = styled.td`
  text-align: left;
`;
const But = styled.div`
  width: 90%;
  text-align: right;
  margin: auto auto 2% auto;
`;
const Button = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
`;

function ChangeInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditableName, setIsEditableName] = useState(false);
  const [isEditableEmail, setIsEditableEmail] = useState(false);
  const [isEditablePass, setIsEditablePass] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);



  const fetchData = () => {
    // Giả định ta gọi API để lấy dữ liệu từ backend
    // Và sau khi nhận dữ liệu thành công, ta gán giá trị vào state
    const data = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '******',
    };

    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
  };

  useEffect(() => {
    // Gọi hàm fetchData trong useEffect để lấy dữ liệu khi component được render
    fetchData();
  }, []);

  const handleCarrotClickName = () => {
    setIsEditableName(true);
    nameInputRef.current.focus();
  };
  
  const handleCarrotClickEmail = () => {
    setIsEditableEmail(true);
    emailInputRef.current.focus();
  };
  
  const handleCarrotClickPass = () => {
    setIsEditablePass(true);
    passwordInputRef.current.focus();
  };
  

  return (
        <>
          <Link to="/"><BackHome/></Link>
          <BigText>Change your infomation</BigText>
          <Container>
            <Left>
              <ImageAcc src="https://via.placeholder.com/200x200.png" alt="Mô tả hình ảnh" />
              <Text>
                Change Your Avatar  
                <ButtonChange><Carrot/></ButtonChange>
              </Text>
            </Left>
            <Right>
              <Table>
                <tbody>
                  <tr>
                    <TableCellLeft><Title>Your name:</Title></TableCellLeft>
                    <TableCellRight>
                      <FormInput 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        readOnly={!isEditableName}
                        ref={nameInputRef}
                      />
                      </TableCellRight>
                    <td><Carrot onClick={handleCarrotClickName}/></td>
                  </tr>
                  <tr>
                    <TableCellLeft><Title>Your email:</Title></TableCellLeft>
                    <TableCellRight>
                      <FormInput 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly={!isEditableEmail}
                        ref={emailInputRef}
                      />
                      </TableCellRight>
                    <td><Carrot onClick={handleCarrotClickEmail}/></td>
                  </tr>
                  <tr>
                    <TableCellLeft><Title>Password:</Title></TableCellLeft>
                    <TableCellRight>
                      <FormInput 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        readOnly={!isEditablePass}
                        ref={passwordInputRef}
                      />
                      </TableCellRight>
                    <td><Carrot onClick={handleCarrotClickPass}/></td>
                  </tr>
                </tbody>
              </Table>                                            
            </Right>
          </Container>
          <But><Button>Save</Button></But>
        </>
    );
};

export default ChangeInfo;
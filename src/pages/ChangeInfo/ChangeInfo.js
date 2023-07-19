import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCarrot } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa';
import { getInfo, saveChangeInfo } from '../../API/changeInfoApi';

import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase'
import { ref } from 'firebase/storage'

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    @media (max-width: 1100px) {
      margin-top: 10%;
      margin-bottom: -10%;
    }
    @media (max-width: 768px) {
      margin-top: 15%;
      margin-bottom: -15%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-left: 1%;
      margin-top: 25%;
      margin-bottom: -25%;
      width: 15px;
      height: 15px;
    }
    @media (max-width: 300px) {
      margin-top: 30%;
      margin-bottom: -30%;
    }
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
  @media (max-width: 912px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 10% auto auto auto;
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 95%;
    margin: 15% auto auto auto;
  }
`;

const ImageAcc = styled.img`
    width: 200px;
    height: 200px;
    padding: 3%;
    border: 2px dashed #ffc24b;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 1200px) {
      width: 200px;
      height: 200px;
    }
  
    @media (max-width: 540px) {
      width: 150px;
      height: 150px;
    }
  
    @media (max-width: 480px) {
      width: 120px;
      height: 120px;
    }
`;
const Text = styled.div`
  margin: 10% auto;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFC24B;

  @media (max-width: 912px) {
    font-size: 1.4rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
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
  @media (max-width: 912px) {
    font-size: 1.4rem;
  }
  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
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
  color: gray;
  &:focus {
    outline: none;
  }
  @media (max-width: 912px) {
    font-size: 1.4rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
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
  @media (max-width: 912px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 540px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

const Table = styled.table`
  width: 100%;
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
  @media (max-width: 912px) {
    margin: 5% auto 4% auto;
  }
  @media (max-width: 540px) {
    margin: auto auto 2% auto;
  }
  @media (max-width: 480px) {
    margin: 7% auto 5% auto;
  }
`;
const Button = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  cursor: pointer;
  &:hover{
    background-color: #FFFFCC;
  }
  @media (max-width: 1200px) {
    width: 150px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 100px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;
const convertPngToJpg = (pngFile) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg', 0.9);
    };

    img.onerror = (error) => {
      reject(error);
    };

    img.src = URL.createObjectURL(pngFile);
  });
};

function ChangeInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [renewpassword, setReNewPassword] = useState('');
  const [isEditableName, setIsEditableName] = useState(false);
  const [isEditableEmail, setIsEditableEmail] = useState(false);
  const [isEditablePass, setIsEditablePass] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const newPasswordInputRef = useRef(null);
  const [userAva, setUserAva] = useState(null);
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter old password');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const path = `users/${currentUser.image}`;
    try {
      const downloadURL = await getDownloadURL(ref(storage, path));
      currentUser.image = downloadURL;
    } catch (error) {
      currentUser.image = 'https://via.placeholder.com/200x200.png';
      console.error(error);
    }
    const data = {
      name: currentUser.name,
      email: currentUser.email,
      password: currentUser.password,
      image: currentUser.image,
    };
    setUserAva(data.image);
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const fileName = file.name;

    if (file.type === 'image/png') {
      try {
        const jpgFile = await convertPngToJpg(file);
        const imageUrl = URL.createObjectURL(jpgFile);
        setUserAva(imageUrl);
        setFileName(fileName);
      } catch (error) {
        console.error('Error converting PNG to JPG:', error);
      }
    } else {
      const imageUrl = URL.createObjectURL(file);
      setUserAva(imageUrl);
      setFileName(fileName);
    }
  };

  const setFileName = (fileName) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    currentUser.image = fileName;
    localStorage.setItem('user', JSON.stringify(currentUser));
  };

  const handleCarrotClickChange = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', handleFileInputChange);
    fileInput.click();
  };

  const handleCarrotClickName = () => {
    setIsEditableName(true);
    nameInputRef.current.focus();
    nameInputRef.current.style.color = '#FFC24B';
  };

  const handleCarrotClickEmail = () => {
    setIsEditableEmail(true);
    emailInputRef.current.focus();
    emailInputRef.current.style.color = '#FFC24B';
  };

  const handleCarrotClickPass = () => {
    setIsEditablePass(true);
    passwordInputRef.current.focus();
    passwordInputRef.current.style.color = '#FFC24B';
    setPassword('');
    setPasswordPlaceholder('Enter old password');
  };

  const handleSubmit = async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    try {
      if (newpassword === renewpassword && password) {
        currentUser.name = name;
        currentUser.email = email;
        currentUser.password = newpassword;

        const response = await saveChangeInfo(currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
        console.log('Thay đổi thông tin thành công:', currentUser);
      } else {
        alert('Mật khẩu không khớp');
      }
    } catch (error) {
      console.error('Lỗi thay đổi thông tin:', error);
    }
  };

  return (
    <>
      <Link to="/home"><BackHome /></Link>
      <BigText>Change your information</BigText>
      <Container>
        <Left>
          <ImageAcc src={userAva} alt="Mô tả hình ảnh" />
          <Text>
            Change Your Avatar
            <ButtonChange><Carrot onClick={handleCarrotClickChange} /></ButtonChange>
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
                <td><Carrot onClick={handleCarrotClickName} /></td>
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
                <td><Carrot onClick={handleCarrotClickEmail} /></td>
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
                    placeholder={passwordPlaceholder}
                  />
                </TableCellRight>
                <td><Carrot onClick={handleCarrotClickPass} /></td>
              </tr>
              <tr>
                <TableCellLeft>
                  <Title style={{ display: isEditablePass ? 'block' : 'none' }}>
                    New-Password:
                  </Title>
                </TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="password"
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    readOnly={!isEditablePass}
                    ref={newPasswordInputRef}
                    style={{ display: isEditablePass ? 'block' : 'none' }}
                    placeholder="Enter new password"
                  />
                </TableCellRight>
                <td></td>
              </tr>
              <tr>
                <TableCellLeft>
                  <Title style={{ display: isEditablePass ? 'block' : 'none' }}>
                    Re-New-Password:
                  </Title>
                </TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="password"
                    value={renewpassword}
                    onChange={(e) => setReNewPassword(e.target.value)}
                    readOnly={!isEditablePass}
                    ref={newPasswordInputRef}
                    style={{ display: isEditablePass ? 'block' : 'none' }}
                    placeholder="Re-enter new password"
                  />
                </TableCellRight>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Right>
      </Container>
      <But><Button onClick={handleSubmit}>Save</Button></But>
    </>
  );
};

export default ChangeInfo;
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './Token/Token'
import styled from "styled-components";
import {FaGooglePlusG} from 'react-icons/fa';

const SubmitGGButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 5% auto 10% auto;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  color: #b54141;
`;
const StyledFaGooglePlusG = styled(FaGooglePlusG)` 
  width: 30px;
  height: 30px;
  color: red;
`;

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

const LoginWithGoogle = () => {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    // Xử lý thông tin đăng nhập thành công
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('[Login Failed] res:', res);
    // Xử lý khi đăng nhập gặp lỗi
  };
  

  return (
    <div>
      <GoogleLogin
        clientId={clientId} // Thay YOUR_CLIENT_ID bằng Client ID của ứng dụng Google của bạn
        buttonText="Đăng nhập với Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
      />
    </div>
  );
};

export default LoginWithGoogle;

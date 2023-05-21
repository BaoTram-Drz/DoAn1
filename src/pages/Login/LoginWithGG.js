import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './Token/Token'


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

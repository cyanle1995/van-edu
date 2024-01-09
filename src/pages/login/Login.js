import "./styles.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log('tokenResponse', tokenResponse)
      if (tokenResponse?.access_token) {
        localStorage.setItem('TOKEN', tokenResponse?.access_token)
      }
    },
  });
  return (
    <div className="login-container">
      <img className="login-bg" src="/login-background.svg" alt="image" />
      <img className="login-img" src="/login-icon.svg" alt="image" />
      <div className="login-title">Find clarity amidst the chaos</div>
      <div className="login-des">Chọn phương thức đăng nhập</div>
      <div className="login-google-layout" onClick={() => login()}>
        <img className="login-gg-img" src="/google.svg" alt="image" />
        <div className="login-gg-txt">Google</div>
      </div>
      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          console.log('credentialResponse', credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />; */}
      <div className="login-cancel">Bỏ qua</div>
    </div>
  );
};
export default Login;

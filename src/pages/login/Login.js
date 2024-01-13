import "./styles.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { apiSocialLogin } from "helpers/api/course";

const Login = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem('TOKEN')
  }, [])
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log('tokenResponse', tokenResponse)
      if (tokenResponse?.access_token) {
        
        onSsoLogin(tokenResponse?.access_token)
        
      }
    },
  });
  const onSsoLogin = (token) => {
    const params = {
      access_token: token,
    }
    apiSocialLogin(params).then(res => {
      console.log('Login=== res', res);
      localStorage.setItem('TOKEN', res?.jwt);
      localStorage.setItem('USER', JSON.stringify(res?.user));
      history.push('/course')
    }).catch(error => {
      console.log('Login=== error', error);
    })
  }
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

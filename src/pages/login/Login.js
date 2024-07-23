import "./styles.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { apiSocialLogin } from "helpers/api/course";
import { createDirectus, authentication } from '@directus/sdk';

const Login = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    localStorage.clear();
  }, []);
  const login = async () => {
    window.location.href = "https://education.akaky.xyz/auth/login/google";
    // const client = createDirectus('https://education.akaky.xyz')
    //  .with(authentication('cookie', { credentials: 'include' }));

    // await client.refresh();
  };

  const onCancel = () => {
    history.push("/home");
  };
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
      <div className="login-cancel" onClick={onCancel}>
        Bỏ qua
      </div>
    </div>
  );
};
export default Login;

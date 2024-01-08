import logoIcon from "assets/icons/logo.png";
import "./styles.scss";
import Button from "components/button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="login-container">
      <img className="login-bg" src="/login-background.svg" alt="image" />
      <img className="login-img" src="/login-icon.svg" alt="image" />
      <div className="login-title">Find clarity amidst the chaos</div>
      <div className="login-des">Chọn phương thức đăng nhập</div>
      <div className="login-google-layout">
        <img className="login-gg-img" src="/google.svg" alt="image" />
        <div className="login-gg-txt">Google</div>
      </div>
      <div className="login-cancel">Bỏ qua</div>
    </div>
  );
};
export default Login;

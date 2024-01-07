import { useState } from "react";
import Input from "components/input/Input";
import Button from "components/button/Button";
import "./styles.scss";
const Password = () => {
  const [passwordStatus, setPasswordStatus] = useState(null);

  const onSetPassword = () => {
    setPasswordStatus("Success");
  };
  const returnToLogin = () => {
    localStorage.removeItem("USER_INFO");
    window.location.href = "/login";
  };
  if (passwordStatus === "Success") {
    return (
      <div className="password-container">
        <div className="password-status-content">
          パスワードの再設定が完了しました。 <br />
          ログインしてください。
        </div>
        <Button
          key="back"
          text="ログイン画面へ戻る"
          background="#0E6FBA"
          width={260}
          style={{ marginTop: 20 }}
          onClick={returnToLogin}
        />
      </div>
    );
  }
  return (
    <div className="password-container">
      <div className="password-row">
        <div className="password-col">
          <Input title="パスワード" width={260} type="password" />
        </div>
        <div className="password-col">
          <Input title="パスワード（確認)" width={260} type="password" />
        </div>
      </div>
      <Button
        key="back"
        text="登録"
        background="#0E6FBA"
        width={260}
        style={{ marginTop: 50 }}
        onClick={onSetPassword}
      />
    </div>
  );
};
export default Password;

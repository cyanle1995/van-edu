import { useState } from "react";
import Input from "components/input/Input";
import InputOtp from "components/inputOtp/Input";
import Button from "components/button/Button";
import { useForm, Controller } from "react-hook-form";
import "./styles.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  // email: yup.string().required("Required"),
  // emailConfirm: yup.string().required("Required"),
});

const PRORESS = {
  INIT: "INIT",
  ENTERED_INFO: "ENTERED_INFO",
  SENT_EMAIL_VERIFY: "SENT_EMAIL_VERIFY",
  SENT_OTP: "SENT_OTP",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGED_EMAIL: "CHANGED_EMAIL",
  GOTO_FORM_OTP: "GOTO_FORM_OTP",
  AUTHEN_COMPLETED: "AUTHEN_COMPLETED",
};
const FacilityInformation = () => {
  const history = useHistory();

  const [progresStatus, setProgresStatus] = useState(PRORESS.INIT);
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [otp, setOtp] = useState([]);
  const [isOtpError, setIsOtpError] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    clearErrors,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setProgresStatus(PRORESS.ENTERED_INFO);
  };
  const onConfirmInfo = () => {
    setProgresStatus(PRORESS.ENTERED_INFO);
  };
  const onEditFormInfo = () => {
    setProgresStatus(PRORESS.INIT);
  };
  const onSendEmailVerification = () => {
    setProgresStatus(PRORESS.SENT_OTP);
  };
  const onChangeEmail = () => {
    setProgresStatus(PRORESS.CHANGE_EMAIL);
  };
  const onSubmitChangeEmail = () => {
    setProgresStatus(PRORESS.CHANGED_EMAIL);
  };
  const onResend = () => {};
  const goToFormOTP = () => {
    setProgresStatus(PRORESS.GOTO_FORM_OTP);
  };
  const onSubmitOtp = () => {
    if (otp.toString() === "1,1,1,1,1,1") {
      setIsOtpError(false);
      setProgresStatus(PRORESS.AUTHEN_COMPLETED);
    } else {
      setIsOtpError(true);
    }
  };
  const onChangeOtp = (index, value) => {
    if (value.length < 2) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };
  const gotoUserList = () => {
    history.push("/master-setting/user");
  };
  let isValidOtp = otp.length === 6;
  if (otp.length === 6) {
    if (otp.findIndex((ele) => !ele) > -1) isValidOtp = false;
  }
  if (progresStatus === PRORESS.AUTHEN_COMPLETED) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-otp-success">
          認証が完了しました
        </div>
        <Button
          key="back"
          text="利用者一覧へ"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={gotoUserList}
          disabled={!isValidOtp}
        />
      </div>
    );
  }
  if (progresStatus === PRORESS.GOTO_FORM_OTP) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-row">
          <div className="facility-name-label">OTPコードを入力する</div>
        </div>
        <div className="facility-information-otp-row">
          <div className="facility-information-otp-input">
            <InputOtp
              value={otp[0]}
              onChange={(value) => onChangeOtp(0, value)}
            />
          </div>
          <div className="facility-information-otp-input">
            <InputOtp
              value={otp[1]}
              onChange={(value) => onChangeOtp(1, value)}
            />
          </div>
          <div className="facility-information-otp-input">
            <InputOtp
              value={otp[2]}
              onChange={(value) => onChangeOtp(2, value)}
            />
          </div>
          <span className="facility-information-otp-space">-</span>
          <div className="facility-information-otp-input">
            <InputOtp
              value={otp[3]}
              onChange={(value) => onChangeOtp(3, value)}
            />
          </div>
          <div className="facility-information-otp-input">
            <InputOtp
              value={otp[4]}
              onChange={(value) => onChangeOtp(4, value)}
            />
          </div>
          <div className="facility-information-otp-input">
            <InputOtp
              value={otp[5]}
              onChange={(value) => onChangeOtp(5, value)}
            />
          </div>
        </div>
        {isOtpError && (
          <div className="otp-error-layout">
            <span className="otp-error-text1">
              ※認証コードが間違っています。
            </span>
            <span className="otp-error-text2">
              再送信して新しいコード入れるか、有効期限以内に再度入力してください。
            </span>
          </div>
        )}
        <Button
          key="back"
          text="認証"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={onSubmitOtp}
          disabled={!isValidOtp}
        />
        <div className="facility-information-row-link">
          <div className="facility-information-link" onClick={onResend}>
            再送信する
          </div>
          <div className="facility-information-link" onClick={onChangeEmail}>
            メールアドレスを変更する
          </div>
        </div>
      </div>
    );
  }
  if (progresStatus === PRORESS.SENT_OTP) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-col">
          <div className="facility-name-label">施設登録メールアドレス</div>
          <div className="facility-name-label ml-20">
            kaigoplus@sanwajp-group.com
          </div>
          <div className="facility-name-label">
            へ認証用コード（OTPコード）を送信しました。
          </div>
          <div className="facility-name-label">
            メールを確認し、次画面で認証用コードを入力してください。
          </div>
        </div>
        <Button
          key="back"
          text="認証コードを入力する"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={goToFormOTP}
        />
        <div className="facility-information-row-link">
          <div className="facility-information-link" onClick={onResend}>
            再送信する
          </div>
          <div className="facility-information-link" onClick={onChangeEmail}>
            メールアドレスを変更する
          </div>
        </div>
      </div>
    );
  }
  if (progresStatus === PRORESS.SENT_OTP) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-col">
          <div className="facility-name-label">施設登録メールアドレス</div>
          <div className="facility-name-label ml-20">
            kaigoplus@sanwajp-group.com
          </div>
          <div className="facility-name-label">
            へ認証用コード（OTPコード）を送信しました。
          </div>
          <div className="facility-name-label">
            メールを確認し、次画面で認証用コードを入力してください。
          </div>
        </div>
        <Button
          key="back"
          text="認証コードを入力する"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={goToFormOTP}
        />
        <div className="facility-information-row-link">
          <div className="facility-information-link" onClick={onResend}>
            再送信する
          </div>
          <div className="facility-information-link" onClick={onChangeEmail}>
            メールアドレスを変更する
          </div>
        </div>
      </div>
    );
  }
  if (progresStatus === PRORESS.CHANGED_EMAIL) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-col">
          <div className="facility-name-label">施設登録メールアドレス</div>
          <div className="facility-name-label ml-20">
            kaigoplus@sanwajp-group.com
          </div>
          <div className="facility-name-label">
            に変更し認証コード（OTPコード）を送信しました。
          </div>
          <div className="facility-name-label">
            メールを確認し、次画面で認証用コードを入力してください。
          </div>
        </div>
        <Button
          key="back"
          text="認証コードを入力する"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={goToFormOTP}
        />
        <div className="facility-information-row-link">
          <div className="facility-information-link" onClick={onResend}>
            再送信する
          </div>
          <div className="facility-information-link" onClick={onChangeEmail}>
            メールアドレスを変更する
          </div>
        </div>
      </div>
    );
  }
  if (progresStatus === PRORESS.CHANGE_EMAIL) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-col">
          <div className="facility-name-label">施設登録メールアドレス</div>
          <div className="facility-name-label ml-20">
            kaigoplus@sanwajp-group.com
          </div>
          <div className="facility-name-label">新しい登録メールアドレス</div>
          <div className="facility-information-dol">
            <div className="facility-information-row">
              <Input width={400} />
            </div>
            <div className="facility-information-row">
              <Input width={400} />
              （確認用）
            </div>
          </div>
        </div>
        <Button
          key="back"
          text="メールアドレス変更する"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={onSubmitChangeEmail}
        />
      </div>
    );
  }
  if (progresStatus === PRORESS.SENT_EMAIL_VERIFY) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-col">
          <div className="facility-name-label">施設登録メールアドレス</div>
          <div className="facility-name-label ml-20">
            kaigoplus@sanwajp-group.com
          </div>
          <div className="facility-name-label">
            へ認証用コード（OTPコード）を送信しました。
          </div>
          <div className="facility-name-label">
            メールを確認し、次画面で認証用コードを入力してください。
          </div>
        </div>
        <Button
          key="back"
          text="認証コードを入力する"
          background="#0E6FBA"
          width={400}
          style={{ marginTop: 100 }}
          onClick={onSendEmailVerification}
        />
        <div className="facility-information-row-link">
          <div className="facility-information-link" onClick={onResend}>
            再送信する
          </div>
          <div className="facility-information-link" onClick={onChangeEmail}>
            メールアドレスを変更する
          </div>
        </div>
      </div>
    );
  }
  if (progresStatus === PRORESS.ENTERED_INFO) {
    return (
      <div className="facility-information-container">
        <div className="facility-information-row mb-30">
          <div className="facility-information-col">
            <div className="facility-name-label">施設名 ※編集不可</div>
            <div className="facility-name-label">ABC苑</div>
          </div>
          <div className="facility-information-col">
            <div className="facility-name-label">施設登録メールアドレス</div>
            <div className="facility-information-item">
              kaigoplus@sanwajp-group.com
            </div>
          </div>
        </div>
        <div className="facility-information-row">
          <div className="facility-information-col">
            <div className="post-code-label">施設住所</div>
            <div className="facility-information-row align-baseline">
              <span className="post-code-icon">〒</span>
              <div className="facility-information-item">1050004</div>
            </div>
            <div className="facility-information-item">東京都港区新橋2丁目</div>
            <div className="facility-information-item">
              20-15　新橋駅前ビル1号館808
            </div>
          </div>
          <div className="facility-information-col mt-20">
            <div className="facility-name-label">施設代表電話番号</div>
            <div className="facility-information-item">0362285382</div>
          </div>
        </div>

        <Button
          key="back"
          text="登録を完了してメールアドレス認証へ進む"
          background="#0E6FBA"
          width={350}
          style={{ marginTop: 100 }}
          onClick={onSendEmailVerification}
        />
        <div className="facility-information-row-link-center">
          <div className="facility-information-link" onClick={onEditFormInfo}>
            登録情報を編集する
          </div>
        </div>
      </div>
    );
  }
  return (
    <form
      className="facility-information-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="facility-information-row">
        <div className="facility-information-col">
          <div className="facility-name-label">施設名 ※編集不可</div>
          <div className="facility-name-label">ABC苑</div>
        </div>
        <div className="facility-information-col">
          <div className="facility-information-row">
            <Controller
              render={() => (
                <Input
                  title="施設登録メールアドレス"
                  width={400}
                  // value={email}
                  // onChange={(value) => setEmail(value)}
                  placeholder="xxxxxxx＠xxxxxxx"
                  name="email"
                  error={errors?.email?.message}
                />
              )}
              // value={email}
              name="email"
              control={control}
            />
          </div>
          <div className="facility-information-row">
            <Controller
              render={() => (
                <Input
                  title=""
                  width={400}
                  // value={emailConfirm}
                  // onChange={(value) => setEmailConfirm(value)}
                  placeholder="xxxxxxx＠xxxxxxx"
                  error={errors?.emailConfirm?.message}
                />
              )}
              // value={emailConfirm}
              name="emailConfirm"
              control={control}
            />
            （確認用）
          </div>
        </div>
      </div>
      <div className="facility-information-row">
        <div className="facility-information-col">
          <div className="post-code-label">施設住所</div>
          <div className="facility-information-row align-baseline">
            <span className="post-code-icon">〒</span>
            <Input width={160} placeholder="郵便番号" />
            <span className="facility-information-link">住所自動検索</span>
          </div>
          <div className="ml-20">
            <Input width={400} placeholder="住所１" />
          </div>
          <div className="ml-20">
            <Input width={400} placeholder="番地以降・建物名" />
          </div>
        </div>
        <div className="facility-information-col mt-20">
          <div className="facility-information-row">
            <Input
              title="施設代表電話番号"
              width={300}
              placeholder="ハイフン無し"
            />
          </div>
        </div>
      </div>

      <Button
        key="back"
        text="確認する"
        background="#0E6FBA"
        width={260}
        style={{ marginTop: 100 }}
        // onClick={onConfirmInfo}
        type="submit"
      />
    </form>
  );
};
export default FacilityInformation;

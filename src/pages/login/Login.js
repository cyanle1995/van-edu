import logoIcon from "assets/icons/logo.png";
import "./styles.scss";
import Input from "components/input/Input";
import Button from "components/button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login as loginAction, clearErrorMessage } from "store/user/actions";
import Loading from "components/loading/Loading";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import useNotify from "hooks/useNotification";

const Login = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  const { showToastError } = useNotify();
  const { loading, loginInfo, error } = useSelector(
    (state) => state.UserReducer
  );
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (isEmpty(loginInfo)) {
      setIsLoginSuccess(false);
      if (error?.message) {
        showToastError(error?.message);
        dispatch(clearErrorMessage());
      }
    } else {
      setIsLoginSuccess(true);
    }
  }, [loginInfo, error.message]);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const onLogin = () => {
    if (id && password) {
      dispatch(
        loginAction({
          userId: id,
          password: password,
        })
      );
    }
  };
  const onAcceptPolicy = () => {
    if (!isEmpty(loginInfo)) {
      localStorage.setItem("USER_INFO", JSON.stringify(loginInfo));
      const userInfoString = localStorage.getItem("USER_INFO");
      let userInfo = null;
      userInfo = JSON.parse(userInfoString);
      const url =
        userInfo.userId === "admin" ? "/" : "/master-setting/facility";
      window.location.href = url;
    }
  };
  const onForgotPassword = () => {
    history.push("/password");
  };
  if (isLoginSuccess) {
    return (
      <div className="policy-container">
        <img src={logoIcon} className="logo-icon" />
        <div className="policy-content">
          <br />
          利用規約
          <br />
          この規約（以下「本規約」といいます。）は、三和株式会社（以下「当社」といいます。）が提供する
          当システムに関するすべての製品およびサービス（以下「本サービス」といいます。）の利用に関する条件を、本サービスを利用する方（以下「ご利用者」といいます。）と当社との間で定めるものです。
          <br />
          1. 定義 本規約では、以下の用語を使用します。 1.1.
          「コンテンツ」とは、文章、画像、ソフトウェア、プログラム、コード、データその他の情報のことをいいます。
          <br />
          1.2.
          「本コンテンツ」とは、本サービスを通じてアクセスすることができるコンテンツのことをいいます。
          <br />
          2. 規約への同意 2.1.
          ご利用者は、本規約の定めに従って本サービスを利用しなければなりません。ご利用者は、本規約に有効かつ取消不能な同意をしないかぎり本サービスを利用できません。
          <br />
          2.2.
          ご利用者は、本サービスを実際に利用することによって本規約に有効かつ取消不能な同意をしたものとみなされます。
          <br />
          3. 規約の変更 3.1.
          当社は、当社が必要と判断する場合、あらかじめお客様に通知することなく、いつでも、本規約および個別利用規約を変更できるものとします。
          <br />
          3.2.
          ご利用者は本規約および個別利用規約の変更後も本サービスを使い続けることにより、変更後の本規約および適用のある個別利用規約に対する有効かつ取消不能な同意をしたものとみなされます。
          <br />
          4. プライバシー 4.1. 当社は、ご利用者のプライバシーを尊重しています。
          <br />
          4.2.
          当社は、ご利用者のプライバシー情報と個人情報を、当社のプライバシーポリシーに従って適切に取り扱います。
          <br />
          4.3.
          当社は、ご利用者から収集した情報を安全に管理するため、セキュリティに最大限の注意を払っています。
          <br />
          5. コンテンツ 5.1.
          当社がご利用者に対し提供する本コンテンツに関する知的財産権その他の権利はご利用者に移転せず、ご利用者は、着用者の介護のために必要な範囲で利用することができます。
          <br />
          5.2.
          ご利用者は、本コンテンツを、着用者の介護に現実に必要な範囲以外に利用(複製、送信、転載、改変、リバースエンジニアリングなどの行為を含みます。)してはなりません。
          <br />
          6. ご利用者の責任 6.1.
          ご利用者は、ご利用者ご自身の責任において本サービスを利用するものとし、本サービスにおいて行った一切の行為およびその結果について一切の責任を負うものとします。
          <br />
          6.2.
          当社は、ご利用者が本規約に違反して本サービスを利用していると認めた場合、当社が必要かつ適切と判断する措置を講じます。ただし、当社は、かかる違反を防止または是正する義務を負いません。
          <br />
          7. 当社の免責 7.1.
          当社は、本サービス（本コンテンツを含みます。）に事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          <br />
          7.2.
          当社は、ご利用者に対して、かかる瑕疵を除去して本サービスを提供する義務を負いません。
          <br />
          7.3.
          当社は、本サービスに起因してご利用者に生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とご利用者との間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
          <br />
          8. 準拠法、裁判管轄
          本規約は日本語を正文とし、その準拠法は日本法とします。本サービスに起因または関連してご利用者と当社との間に生じた紛争については東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。
          データ送信許諾
          この許諾書（以下「本許諾」といいます。）は、三和株式会社（以下「当社」といいます。）と、本サービスを利用する方（以下「ご利用者」といいます。）との間で定めるものです。
          <br />
          1. データの内容
          本サービスで使用するデータ（以下「本データ」といいます。）とは、ご利用者が入力した情報及び当社のシステムによって得られた全ての情報のことをいいます。
          <br />
          2. 使用許諾の範囲 2.1.
          当社は、使用を許諾された本データを、医学研究・尿とりパッド開発・利用者の業務アドバイスにおける情報解析にのみ使用できるものとする。
          <br />
          2.2.
          本データの使用者の範囲は、個人又は当社の属するグループ若しくは研究室の構成員に限定し、人数は必要最小限とします。
          <br />
          3. 知見の発表 3.1.
          当社は、本覚書に違反しない範囲において、本データを使用して得られた知見に関する研究発表又は成果の公表を行なうことができることとします。
          <br />
          3.2.
          研究成果の公表には、第2条に違反しない範囲において、本データを利用して得られたデータ又は処理プログラムの公開を含むものとします。
          <br />
          4. 管轄裁判所
          本覚書に関する一切の訴訟については、東京地方裁判所を専属的な合意管轄裁判所とします。
          プライバシーポリシー
          当社が保有する個人データは、次の事項に該当する場合を除き、それぞれのサービスおよび業務の利用目的
          (医学研究における情報解析)
          の達成に必要な範囲で利用するほか、相互に利用することがあります。 ・
          法令に基づく場合 ・
          人の生命、身体または財産の保護のために必要がある場合であって、ご利用者本人の同意を得ることが困難であるとき
          ・
          公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、お客さま本人の同意を得ることが困難であるとき
          ・
          国の機関もしくは地方公共団体またはその委託を受けた者が法令に定める事務をすることに対して協力する必要がある場合であって、お客さま本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
          当社は、匿名加工情報を作成するときは、特定の個人を識別することおよびその作成に用いる個人情報を復元することができないようにするために必要な措置を取ります。
          また、匿名加工情報を自ら利用するときは、元の個人情報に係る本人を識別
          (再識別) する目的で他の情報と照合することを行いません。
          当社は、個人情報へのアクセスの管理、個人情報の持出し手段の制限、外部からの不正なアクセスの防止のための措置その他の個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
        </div>
        <Button
          disabled={!id || !password}
          text="承諾する"
          className="policy-button"
          onClick={onAcceptPolicy}
        />
      </div>
    );
  }
  return (
    <div className="login-container">
      {loading && <Loading />}
      <img src={logoIcon} className="login-logo-icon" />
      <div className="login-form">
        <div className="login-title">ログインページ</div>
        <Input title="事業者ID" value={id} onChange={(value) => setId(value)} />
        <Input
          title="パスワード"
          subtitle="※英数字8文字以上"
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
          onEnter={onLogin}
        />
        <Button
          disabled={!id || !password}
          text="ログイン"
          className="login-button"
          onClick={onLogin}
        />
        <div className="forgot-password" onClick={onForgotPassword}>
          パスワードの再設定
        </div>
      </div>
    </div>
  );
};
export default Login;

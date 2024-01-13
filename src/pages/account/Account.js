import { Container } from "react-bootstrap";
import "./styles.scss";
import AppFooter from "components/appFooter/AppFooter";
import { useHistory } from "react-router-dom";

const column1 = [
  { icon: "/book.svg", label: "Khóa học" },
  { icon: "/chung-chi.svg", label: "Chứng chỉ của tôi" },
  { icon: "/mentor.svg", label: "Trở thành mentor" },
  { icon: "/account-history.svg", label: "Lịch sử mua hàng" },
];

const column2 = [
  { icon: "/account-notication.svg", label: "Thông báo" },
  { icon: "/star.svg", label: "Đánh giá" },
  { icon: "/customer.svg", label: "Hỗ trợ khách hàng" },
  { icon: "/share.svg", label: "Giới thiệu bạn bè" },
  { icon: "/infomation.svg", label: "Điều khoản & Chính sách" },
];

const Account = () => {
  const history = useHistory();
  const onLogout = () => {
    history.push("/login");
    localStorage.clear();
  };
  return (
    <Container className="account-container">
      <div className="item header">
        <div className="name-avt">
          <img src="/avatar-user.svg" alt="image" className="avt" />
          <div className="name">Quyetle127</div>
        </div>

        <img src="/edit.svg" alt="image" className="icon" />
      </div>

      <div className="item column">
        {column1.map((item, index) => {
          return (
            <div className="label" key={index}>
              <img className="icon" src={item.icon} alt="image" />
              <div className="text">{item.label}</div>
            </div>
          );
        })}
      </div>

      <div className="item column">
        {column2.map((item, index) => {
          return (
            <div className="label" key={index}>
              <img className="icon" src={item.icon} alt="image" />
              <div className="text">{item.label}</div>
            </div>
          );
        })}
      </div>

      <div className="item label" onClick={onLogout}>
        <img className="icon" src="/logout.svg" alt="image" />
        <div className="text">Đăng xuất</div>
      </div>
      <AppFooter />
    </Container>
  );
};
export default Account;

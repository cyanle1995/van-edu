import { Container } from "react-bootstrap";
import "./styles.scss";

const column1 = [
  { icon: "/speaker.svg", label: "Khóa học" },
  { icon: "/speaker.svg", label: "Chứng chỉ của tôi" },
  { icon: "/speaker.svg", label: "Trở thành mentor" },
  { icon: "/speaker.svg", label: "Lịch sử mua hàng" },
];

const column2 = [
  { icon: "/speaker.svg", label: "Thông báo" },
  { icon: "/speaker.svg", label: "Đánh giá" },
  { icon: "/speaker.svg", label: "Hỗ trợ khách hàng" },
  { icon: "/speaker.svg", label: "Giới thiệu bạn bè" },
  { icon: "/speaker.svg", label: "Điều khoản & Chính sách" },
];

const Account = () => {
  return (
    <Container className="account-container">
      <div className="item header">
        <div className="name-avt">
          <img src="/avatar-user.svg" alt="image" className="avt" />
          <div className="name">Quyetle127</div>
        </div>

        <img src="/speaker.svg" alt="image" className="icon" />
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

      <div className="item label">
        <img className="icon" src="/speaker.svg" alt="image" />
        <div className="text">Đăng xuất</div>
      </div>
    </Container>
  );
};
export default Account;

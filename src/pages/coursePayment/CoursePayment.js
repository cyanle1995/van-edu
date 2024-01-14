import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Button from "components/button/Button";
import { apiGetExams } from "helpers/api/course";
import Modal from "components/modal/Modal";

const BANK = 'tpbank'
const ACCOUNT = '03970233201'
const ACCOUNT_NAME = 'LE CAO NGUYEN'

export const getQrPayment = (amount, description) => {
  return `https://img.vietqr.io/image/${BANK}-${ACCOUNT}-compact2.jpg?amount=${amount}&addInfo=${description}&accountName=${ACCOUNT_NAME}`
}

const Coursepayment = () => {
  const history = useHistory();
  const [status, setStatus] = useState('INIT');
  const onPayment = () => {
    setStatus('PAYMENT')
  }
  const onGoBack = () => {
    history.goBack();
  }
  if (status === 'PAYMENT') {
    return (
      <div className="coursepay-container">
        <div className="payment-row">
          <div className="payment-row-title">Trạng thái:</div>
          <div className="payment-row-value">Chờ thanh toán</div>
        </div>
        <div className="payment-row">
          <div className="payment-row-title">Đơn giá:</div>
          <div className="payment-row-value">80.000 đ</div>
        </div>
        <div className="grey-line mt-20"></div>
        <img className="payment-qr" src={getQrPayment(80000, 'Thanh toan khoa hoc')} alt="image" />
        <div className="payment-guide-txt">Hướng dẫn thanh toán</div>
        <div className="payment-guide-layout">
          <div className="payment-guide-row mb-10">
            <div className="dot"/>
            <div className="payment-guide-content">Bước 1: Chuyển khoản đúng số tiền bên trên bằng cách quét mã QR</div>
          </div>
          <div className="payment-guide-row">
            <div className="dot"/>
            <div className="payment-guide-content">Bước 2: Tài khoản của bạn sẽ được kích hoạt dịch vụ sau 5s</div>
          </div>
        </div>
        <div className="payment-guide-after-txt">Sau khi chuyển khoản mà chưa nhận được dịch vụ, Gửi hình ảnh chụp màn hình thanh toán tới số</div>
        <div className="payment-guide-after-number">0999999999</div>
      </div>
    )
  }
  return (
    <div className="coursepay-container">
      <div className="coursepay-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" onClick={onGoBack}/>
        <div className={status === 'PAYMENT' ? "app-header-text" : "app-header-text hide"}>Thanh toán</div>
        <img className="app-header-back hide" src="/search.svg" alt="image" />
      </div>
      <img className="coursepay-icon" src="/img&heading.png" alt="image" />
      <div className="coursepay-benifit-row">
        <div className="dot" />
        <div className="coursepay-benifit-text">Không giới hạn các dịch vụ đọc sách và khoá học</div>
      </div>
      <div className="coursepay-benifit-row">
        <div className="dot" />
        <div className="coursepay-benifit-text">Được quyền sử dụng các nội dung độc quyền trong thời gian premium</div>
      </div>
      <div className="coursepay-benifit-row">
        <div className="dot" />
        <div className="coursepay-benifit-text">Ưu tiên hỗ trợ 24/7 về phản hồi dịch vụ</div>
      </div>
      <div className="coursepay-choose-text">Chọn gói dịch vụ, thanh toán bước sau:</div>
      <div className="coursepay-month-layout" onClick={() => onPayment('OneMonth')}>
        <div className="coursepay-month-title">Mua premium 1 tháng</div>
        <div className="coursepay-month-cost">80.000/ tháng chỉ trong hôm nay</div>
      </div>
      <div className="coursepay-year-layout" onClick={() => onPayment('OneYear')}>
        <div className="coursepay-year-title">Mua premium 1 năm</div>
        <div className="coursepay-year-cost">500.000/ năm tiết kiệm 50%</div>
      </div>
      <div className="coursepay-note-text">*Giá dịch vụ đang được khuyến mãi, có thể thay đổi</div>
    </div>
  );
};
export default Coursepayment;

import {
  apiGetBookDetail,
  listBookCategory,
  listFreeBook,
  listPremiumBook,
} from "helpers/api/course";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./styles.scss";
import { getImageURL } from "utils/Utils";
import { Rate } from "antd";
import Button from "components/button/Button";
import { Input } from "antd";

const { TextArea } = Input;
const BookDetail = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  let { bookId } = useParams();
  const [book, setBook] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(['1', '2']);
  useEffect(() => {
    apiGetBookDetail(bookId).then((res) => {
      console.log("detail:", res);
      setBook(res);
    });
  }, []);
  const onGoBack = () => {
    history.goBack();
  };
  const getFullName = (firstname, lastname) => {
    return firstname + " " + lastname;
  };
  const onRate = () => {};
  return (
    <div className="bookdetail-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">Chi tiết sách</div>
        <img className="app-header-search" src="/search.svg" alt="image" />
      </div>
      <div className="bookdetail-body">
        <div className="book-detail-layout">
          <img className="cover" src={getImageURL(book?.thumb)} alt="image" />
          <div className="book-detail-info">
            <div style={{ height: "85%" }}>
              <div className="book-detail-name">{book?.name}</div>
              <div className="book-detail-author">
                Tác giả:{" "}
                {book?.auth ||''}
              </div>
              <Rate allowHalf defaultValue={book?.rates} className="rate" />
              <div className="book-detail-view">(0 lượt)</div>
            </div>
            <div className="reading-share">
              <div className="reading">Đang đọc: 56%</div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Button
            className="start-learn-button"
            key="back"
            text="Đọc sách"
            background="#6059E3"
            width={"100px"}
          />
          <Button
            key="back"
            text="Chia sẻ"
            background="#ffffff"
            width={"100px"}
            textColor="#6059E3"
          />
        </div>
        <div className="line"></div>
        <div className="rate-layout">
          <div className="rate-book-title">Đánh giá sách</div>
          <div className="rate-book-content">
            Những đánh gía của bạn sẽ giúp những người{" "}
          </div>
          <div className="rate-book-content">
            khác biết và đọc nhiều sách hơn
          </div>
          <Rate allowHalf defaultValue={book?.rates} className="rate" />
          <TextArea
            rows={4}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
          <div className="rate-button-row">
            <Button
              className="lesson-comment-button"
              key="back"
              text="Đánh giá"
              background="#ffffff"
              textColor="#817BEC"
              borderColor="#817BEC"
              width={"120px"}
              disabled={!comment}
              onClick={onRate}
            />
          </div>
        </div>
        <div className="line"></div>
        <div className="book-info">
          <div className="book-info-title">Thông tin sách</div>
          <div className="book-info-row">Phân loại: Tâm lý</div>
          <div className="book-info-row">Ngày phát hành: 14/05/2019</div>
          <div className="book-info-row">Nhà phát hành: NXB Hoà Đặng</div>
          <div className="book-info-row">Chịu trách nhiệm nội dung: Đào Hương Ly</div>
          <div className="book-info-row">Trình bày bìa: Đào Hương Ly</div>
        </div>
        <div className="line"></div>
        {comments?.length > 0 && comments.map((item, index) => {
          return <div className="lesson-comment-item" key={index}>
            <div className="lesson-comment-item-row">
              <img className="lession-comment-ava" src="/img-mentor.png" alt="image" />
              {/* { item?.author?.avatar  ? <img className="lession-comment-ava" src={item?.author?.avatar} alt="image" /> : <img className="lession-comment-ava" src="/img-mentor.png" alt="image" /> } */}
              <div className="lesson-comment-name">Nguyen Le Cao</div>
            </div>
            <div className="lesson-comment-content">Mentor của tôi là nguồn cảm hứng không ngừng và người mẫu lý tưởng cho sự tự tin và sự cam kết đối với sự phát triển cá nhân</div>
          </div>
        })}
      </div>
    </div>
  );
};
export default BookDetail;

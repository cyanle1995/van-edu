import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getImageURL } from "utils/Utils";
import "./styles.scss";
import { listBookCategory, listFreeBook, listPremiumBook } from "helpers/api/course";
import { Rate } from "antd";

const ListFreeBook = () => {
  const history = useHistory();
  const [freeBookList, setFreeBookList] = useState([]);

  useEffect(() => {
    listFreeBook().then((res) => {
      setFreeBookList(res)
    });
  }, []);

  const onGoBack = () => {
    history.goBack();
  };
  const onDetailBook = (id) => {
    history.push(`/book/${id}`);
  }
console.log('freeBookList', freeBookList);
  const getFullName = (firstname, lastname) => {
    return firstname + " " + lastname;
  };
  return (
    <div className="topic-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">Đầu sách miễn phí</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="free-layout">
        {freeBookList &&
          freeBookList.map((item) => {
            return (
              <div
                className="free-course-item"
                onClick={() => onDetailBook(item.id)}
              >
                <img
                  className="cover"
                  src={getImageURL(item.thumb)}
                  alt="image"
                />

                <div className="content-book">
                  <div className="name-book">{item.name}</div>
                  <div className="tacgia">{item?.auth ||''}</div>
                  <Rate style={{ fontSize:12 }} allowHalf value={5} className="rate" />
                </div>

                {item.sachnoi && (
                  <div className="sach-noi">
                    <img className="icon" src="/speaker.svg" alt="icon" />
                    <div className="text">sách nói</div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ListFreeBook;

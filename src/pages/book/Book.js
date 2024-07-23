import {
  listBookCategory,
  listFreeBook,
  listPremiumBook,
} from "helpers/api/course";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import { getImageURL } from "utils/Utils";
import { Rate } from "antd";

const Book = () => {
  let dispatch = useDispatch();
  const history = useHistory();

  const [freeBookList, setFreeBookList] = useState([]);
  console.log("freeBookList", freeBookList);
  const [preBookList, setPreBookList] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [selectedCate, setSelectedCate] = useState(null);
  console.log("listCategory", listCategory);
  useEffect(() => {
    listBookCategory().then((res) => {
      let listCate = [];
      if (res?.length > 0) {
        listCate = listCate.concat(
          res.map((item) => {
            return {
              label: item.name,
              value: item.id,
            };
          })
        );
        setListCategory(listCate);
      } else {
        setListCategory([]);
      }
    });
    listFreeBook().then((res) => {
      setFreeBookList(res);
    });

    listPremiumBook().then((res) => {
      setPreBookList(res);
    });
  }, []);
  const onGoBack = () => {
    history.goBack();
  };
  const gotoBookDetail = (id) => {
    history.push(`/book/${id}`);
  };
  const gotoFreeBook = () => {
    history.push("/free-book");
  };
  const onSelectCate = (id) => {
    setSelectedCate(id)
  }
  return (
    <div className="book-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">Tất cả sách</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="book-cate-list-row">
        {listCategory .map((item, index) => {
          if (selectedCate == item.value)
            return (
              <div
                className="book-cate-item-selected"
                onClick={() => onSelectCate(item.value)}
              >
                {item?.label}
              </div>
            );
          return (
            <div
              className="book-cate-item"
              onClick={() => onSelectCate(item.value)}
            >
              {item?.label}
            </div>
          );
        })}
      </div>
      <div className="list-container">
        <div className="heading">
          <div className="text">Các đầu sách miễn phí</div>
          <img
            className="icon"
            src="/arrow-right.svg"
            alt="image"
            onClick={gotoFreeBook}
          />
        </div>

        <div className="book-list">
          {freeBookList.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => gotoBookDetail(item.id)}
              >
                {item.thumb ? (
                  <img
                    className="cover"
                    src={getImageURL(item.thumb)}
                    alt="image"
                  />
                ) : (
                  <img className="cover" src={"./size_sach.png"} alt="image" />
                )}

                <div className="content-book">
                  <div className="name-book">{item.name}</div>
                  <div className="tacgia">{item?.auth || ""}</div>
                  <Rate allowHalf defaultValue={item.rates} className="rate" />
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
      <div className="list-container">
        <div className="heading">
          <div className="text">Các đầu sách premium</div>
          <img className="icon" src="/arrow-right.svg" alt="image" />
        </div>

        <div className="book-list">
          {preBookList.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => gotoBookDetail(item.id)}
              >
                <img
                  className="cover"
                  src={getImageURL(item.thumb)}
                  alt="image"
                />

                <div className="content-book">
                  <div className="name-book">{item.name}</div>
                  <div className="tacgia">{item?.auth || ""}</div>
                  <div className="premium-book">Premium</div>
                  <Rate allowHalf defaultValue={item.rates} className="rate" />
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
    </div>
  );
};
export default Book;

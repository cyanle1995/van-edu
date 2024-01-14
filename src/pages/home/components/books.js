import "../styles.scss";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getImageURL } from "utils/Utils";

const Books = () => {
  const { books } = useSelector((state) => state.HomeReducer);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (books && books.length) {
      let freeBooks = [];
      books.forEach((element) => {
        if (element.is_free) {
          freeBooks.push({
            id: element.id,
            title: element.title,
            rates: element.rates,
            premium: element?.premium || false,
            sachnoi: element?.sachnoi || false,
            tacgia: element?.tacgia || "ten tac gia",
            cover: element.thumb[0].url,
          });
        }
      });

      setBookList(freeBooks);
    }
  }, [books]);

  return (
    <div className="list-container">
      <div className="heading">
        <div className="text">Các đầu sách miễn phí</div>
        <img className="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="book-list">
        {bookList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img className="cover" src={getImageURL(item.cover)} alt="image" />

              <div className="content-book">
                <div className="name-book">{item.title}</div>
                <div className="tacgia">{item.tacgia}</div>
                {item.premium && <div className="premium-book">Premium</div>}
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
  );
};

export default Books;

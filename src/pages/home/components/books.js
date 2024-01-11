import "../styles.scss";
import { Rate } from 'antd';

const bookList = [
  {
    name: "Name",
    premium: false,
    sachnoi: true,
    tacgia: "Don Norman",
    rate: 3.5,
    cover: "/book-cover.png",
  },
  {
    name: "Name",
    premium: true,
    sachnoi: true,
    tacgia: "Don Norman",
    rate: 3.5,
    cover: "/book-cover.png",
  },
  {
    name: "Name",
    premium: false,
    sachnoi: false,
    tacgia: "Don Norman",
    rate: 3.5,
    cover: "/book-cover.png",
  },
];

const Books = () => {
  return (
    <div className="list-container">
      <div className="heading">
        <div className="text">Các đầu sách miễn phí</div>
        <img class="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="book-list">
        {bookList.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img className="cover" src={item.cover} alt="image" />

              <div className="content-book">
                <div className="name-book">{item.name}</div>
                <div className="tacgia">{item.tacgia}</div>
                {item.premium && <div className="premium-book">Premium</div>}
                <Rate allowHalf defaultValue={item.rate} className="rate"/>
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

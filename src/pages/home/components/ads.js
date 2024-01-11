import "../styles.scss";
import Button from "components/button/Button";

const adsList = [
  { title: "Bài giảng đang có", detail: "100+ bài giảng cập nhật mới" },
  { title: "Bài giảng đang có", detail: "100+ bài giảng cập nhật mới" },
  { title: "Bài giảng đang có", detail: "100+ bài giảng cập nhật mới" },
];

const Ads = () => {
  return (
    <div className="ads-container">
      {adsList.map((item, index) => {
        return (
          <div className="ads-item" key={index}>
            <div className="ads-item-left">
              <div className="text-group">
                <div className="title">{item.title}</div>
                <div className="detail">{item.detail}</div>
              </div>

              <Button
                className="ads-item-left-btn"
                text="Học ngay"
                background="#6059e3"
                width="113px"
              />
            </div>

            <div className="ads-item-right">
              <img
                className="ads-item-right-icon"
                src="/home-ads.svg"
                alt="image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ads;

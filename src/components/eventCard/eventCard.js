import { getImageURL } from "utils/Utils";
import "./styles.scss";
import Button from "components/button/Button";

const EventCard = (props) => {
  const { item, key, btnText, onClick } = props;

  return (
    <div className="card" key={key}>
      <img className="cover" src={getImageURL(item?.attributes?.thumb?.data?.[0]?.attributes?.url)} alt="image" />

      <div className="content-event">
        <div className="event-name">{item?.attributes?.title}</div>
        <div className="time-status-event">
          <div className="time">09/12/2023</div>
          <div className="premium-event">Premium</div>
        </div>
      </div>

      <div className="button-footer">
        <div className="status-icon-event">
          <div className="status-item">
            <img className="icon" src="/love.svg" alt="like" />
            <div className="info">{item?.attributes?.event_likes?.data?.attributes?.count}</div>
          </div>

          <div className="status-item">
            <img className="icon" src="/share.svg" alt="share" />
            <div className="info">{item?.attributes?.event_shares?.data?.attributes?.count}</div>
          </div>
        </div>

        <Button
          className="event-btn"
          text={btnText}
          background="#6059E3"
          width="auto"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default EventCard;

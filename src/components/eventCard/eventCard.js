import "./styles.scss";
import Button from "components/button/Button";

const EventCard = (props) => {
  const { item, key, btnText, onClick } = props;

  return (
    <div className="card" key={key}>
      <img className="cover" src={item.cover} alt="image" />

      <div className="content-event">
        <div className="event-name">{item.name}</div>
        <div className="time-status-event">
          <div className="time">{item.time}</div>
          {item.premium && <div className="premium-event">Premium</div>}
        </div>
      </div>

      <div className="button-footer">
        <div className="status-icon-event">
          <div className="status-item">
            <img className="icon" src="/love.svg" alt="like" />
            <div className="info">{item.like}</div>
          </div>

          <div className="status-item">
            <img className="icon" src="/share.svg" alt="share" />
            <div className="info">{item.share}</div>
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

import { getImageURL } from "utils/Utils";
import "./styles.scss";
import Button from "components/button/Button";
import moment from "moment";
import { useHistory } from "react-router-dom";

const EventCard = (props) => {
  const history = useHistory();

  const { item, key, btnText, onClick } = props;
  const onGotoDetail = (item) => {
    history.push(`/event/${item.id}`)
  }
  return (
    <div className="card" key={key}>
      <img className="cover" src={getImageURL(item?.thumb)} alt="image" />

      <div className="content-event">
        <div className="event-name">{item?.name}</div>
        <div className="time-status-event">
          <div className="time">{item?.from && moment(item?.from).format('DD/MM/YYYY')}</div>
          <div className=""> {'    '} {item?.online_offline}</div>
        </div>
      </div>

      <div className="button-footer">
        <div className="status-icon-event">
          <div className="status-item">
            <img className="icon" src="/love.svg" alt="like" />
            <div className="info">{item.attributes?.event_likes?.data?.length || 0}</div>
          </div>

          <div className="status-item">
            <img className="icon" src="/share.svg" alt="share" />
            <div className="info">{item.attributes?.event_shares?.data?.length || 0}</div>
          </div>
        </div>

        <Button
          className="event-btn"
          text={btnText}
          background="#6059E3"
          width="auto"
          onClick={onGotoDetail}
        />
      </div>
    </div>
  );
};

export default EventCard;

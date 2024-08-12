import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import EventCard from "components/eventCard/eventCard";
import { listAllEvents } from "helpers/api/home";
import "./styles.scss";
import { getImageURL } from "utils/Utils";
import moment from "moment";
import Button from "components/button/Button";

const EventDetail = () => {
  const history = useHistory();
  let { eventId } = useParams();
  const [eventDetail, setEventDetail] = useState(null);

  console.log("eventDetail===", eventDetail);

  useEffect(() => {
    listAllEvents({
      filter: {},
    }).then((res) => {
      console.log("ressss detai", res);
      if (res?.length > 0) {
        setEventDetail(res.find((item) => item.id == eventId) || null);
      } else {
        setEventDetail(null);
      }
    });
  }, []);

  const onGoBack = () => {
    history.goBack();
  };
  return (
    <div className="event-detail-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">Sự kiện chi tiết</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="event-detail-layout">
        {eventDetail?.thumb ? (
          <img
            className="lession-video-thumb"
            src={getImageURL(eventDetail?.thumb)}
            alt="image"
          />
        ) : (
          <img className="lession-video-thumb" src={"/img.jpg"} alt="image" />
        )}
        <div className="lession-video-name">{eventDetail?.name}</div>
        <div className="row">
          <div className="lession-time">
            {moment(eventDetail?.from).format("DD/MM/YYY")}
          </div>
          <div className="lession-online">Online và Offline</div>
        </div>
        <div className="event-action-button">
          <Button
            className="start-learn-button"
            key="back"
            text="Đăng ký"
            background="#6059E3"
            width={"40%"}
          />
          <Button
            className="start-learn-button"
            key="back"
            text="Chia sẻ"
            background="white"
            textColor="#6059E3"
            width={"40%"}
          />
        </div>
        <div className="grey-line"></div>
        <div className="event-info-title">Thông tin sự kiện</div>
        <div className="event-info-value">{eventDetail?.description?.replace(/<[^>]+>/g, '')}</div>
      </div>
    </div>
  );
};
export default EventDetail;

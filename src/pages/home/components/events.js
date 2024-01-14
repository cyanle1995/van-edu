import EventCard from "components/eventCard/eventCard";
import "../styles.scss";
import { useEffect, useState } from "react";
import { apiGetListHomeEvent } from "helpers/api/course";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    apiGetListHomeEvent()
      .then((res) => {
        if (res.data?.length > 0) {
          setEvents(res.data);
        }
      })
      .catch((error) => {
        setEvents([]);
      });
  }, []);

  return (
    <div className="list-container">
      <div className="heading">
        <div className="text">Tất cả sự kiện</div>
        <img className="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="events-list">
        {events.map((item, index) => {
          return <EventCard item={item} key={index} btnText="Xem thêm" />;
        })}
      </div>
    </div>
  );
};

export default Events;

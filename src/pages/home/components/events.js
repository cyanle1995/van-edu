import EventCard from "components/eventCard/eventCard";
import "../styles.scss";
import { useEffect, useState } from "react";
import { apiGetListHomeEvent } from "helpers/api/course";

const eventList = [
  {
    share: 124,
    like: 510,
    time: "09/12/2023",
    name: "Tên sự kiện",
    premium: true,
    cover: "/size-event.svg",
  },
  {
    share: 124,
    like: 510,
    time: "09/12/2023",
    name: "Tên sự kiện",
    premium: false,
    cover: "/size-event.svg",
  },
  {
    share: 124,
    like: 510,
    time: "09/12/2023",
    name: "Tên sự kiện",
    premium: true,
    cover: "/size-event.svg",
  },
];

const Events = () => {

  const [events, setEvents] = useState([])
  useEffect(() => {
    apiGetListHomeEvent().then(res =>{
      console.log('ressss', res);
      if (res.data?.length > 0) {
        setEvents(res.data)
      }
    }).catch(error => {
      console.log('errorxxx', error);
      setEvents([])
    })
  }, [])
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

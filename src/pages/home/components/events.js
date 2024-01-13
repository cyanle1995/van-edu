import EventCard from "components/eventCard/eventCard";
import "../styles.scss";

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
  return (
    <div className="list-container">
      <div className="heading">
        <div className="text">Tất cả sự kiện</div>
        <img className="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="events-list">
        {eventList.map((item, index) => {
          return <EventCard item={item} key={index} btnText="Xem thêm" />;
        })}
      </div>
    </div>
  );
};

export default Events;

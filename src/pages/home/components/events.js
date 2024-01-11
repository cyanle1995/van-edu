import ButtonComponent from "components/button/Button";
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
        <img class="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="events-list">
        {eventList.map((item, index) => {
          return (
            <div className="card" key={index}>
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

                <ButtonComponent
                  className="event-btn"
                  text="Button"
                  background="#6059E3"
                  width="auto"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;

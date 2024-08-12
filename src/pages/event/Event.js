import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { getListTopic } from "store/course/actions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EventCard from "components/eventCard/eventCard";
import { listAllEvents } from "helpers/api/home";

const courses = [
  {
    type: "09/12/2023",
    name: "The Glory Show - Trải nghiệm",
  },
  {
    type: "09/12/2023",
    name: "The Glory Show nâng cao",
  },
  {
    type: "09/12/2023",
    name: "The Glory Show pro",
  },
];
const categories = [
  {
    title: 'Tất cả',
    type: 'all',
  },
  {
    title: 'Miễn phí',
    type: 'free',
  },
  {
    title: 'Yêu thích',
    type: 'favorite',
  },
]
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

const Event = () => {
  const history = useHistory();
  const [filterType, setFilterType] = useState('all');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    listAllEvents({
      filter: {
        ...getParamsListEvents(),
        // is_upcoming: {_eq: false},
      },
    }).then(res=> {
      console.log('ressss', res);
      if (res?.length > 0){
        setEvents(res);
      } else{ 
        setEvents([]);
      }
    })
  }, [filterType]);
  const getParamsListEvents = () => {
    const filter = {}
    if (filterType === 'free') {
      filter['is_free'] = {
        _eq: true,
      }
    }
    if (filterType === 'favorite') {
      filter['is_like'] = {
        _eq: true,
      }
    }
    return filter
  }
  const onGoToTopic = (id) => {
    history.push(`course/${id}`);
  };
  const onGoBack = () => {
    history.goBack();
  };
  const onClickFilter = (itemType) => {
    setFilterType(itemType)
  }
  return (
    <div className="event-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">Tất cả sự kiện</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>

      <div className="event-layout">
        {/* <div className="myevent-row">
          <div className="my-event-txt">Sự kiện của tôi</div>
          <img className="event-icon-next" src="/arrow-right.svg" alt="image" />
        </div> */}
        <div className="topic-list-row">
          {categories.map((item, index) => {
            return (
              <div
                className={filterType == item.type ? "topic-item-selected" : "topic-item"}
                onClick={() => onClickFilter(item.type)}
              >
                {item?.title}
              </div>
            );
          })}
        </div>
        {/* <div className="list-event-layout">
          {courses.map((item) => {
            return (
              <div className="my-event-item">
                <div className="my-event-item-left">
                  <div className="my-event-item-left-type">{item.type}</div>
                  <div className="my-event-item-left-name">{item.name}</div>
                </div>
                <div className="my-event-item-right">
                  <img
                    className="my-event-item-right-icon"
                    src="/size-baihoc.svg"
                    alt="image"
                  />
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="grey-line"></div>
        <div className="myevent-row">
          <div className="my-event-txt">Sự kiện sắp diễn ra</div>
          <img className="event-icon-next" src="/arrow-right.svg" alt="image" />
        </div>

        <div className="list-lesson-layout">
          {events.map((item, index) => {
            return <EventCard item={item} key={index} btnText="Xem thêm" />;
          })}
        </div>

        <div className="grey-line"></div>
        <div className="myevent-row">
          <div className="my-event-txt">Sự kiện miễn phí</div>
          <img className="event-icon-next" src="/arrow-right.svg" alt="image" />
        </div>

        <div className="list-lesson-layout">
          {events.map((item, index) => {
            return <EventCard item={item} key={index} btnText="Xem thêm" />;
          })}
        </div>

        <div className="grey-line"></div>
        <div className="myevent-row">
          <div className="my-event-txt">Sự kiện sắp yêu thích</div>
          <img className="event-icon-next" src="/arrow-right.svg" alt="image" />
        </div>

        <div className="list-lesson-layout">
          {events.map((item, index) => {
            return <EventCard item={item} key={index} btnText="Xem thêm" />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Event;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { getListTopic } from "store/course/actions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EventCard from "components/eventCard/eventCard";

const courses = [
  {
    type: '09/12/2023',
    name: 'The Glory Show - Trải nghiệm',
  },
  {
    type: '09/12/2023',
    name: 'The Glory Show nâng cao',
  },
  {
    type: '09/12/2023',
    name: 'The Glory Show pro',
  },
];

const topics1 = [
  { id: 1, name: 'Thiền toạ' },
  { id: 2, name: 'Năng lượng' },
  { id: 3, name: 'Thức tỉnh' },
  { id: 4, name: 'Nấu ăn' },
  { id: 5, name: 'Tính nữ' },
  { id: 6, name: 'Chiêm tinh' },
  { id: 7, name: 'Tử vi' },
  { id: 8, name: 'Chữa lành' },
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
  let dispatch = useDispatch();
  const { topics } = useSelector((state) => state.CourseReducer);
  useEffect(() => {
    dispatch(getListTopic())
  }, [])
  const onGoToTopic = (id) => {
    history.push(`course/${id}`)
  }
  return (
    <div className="event-container">
      <div className="app-header">
        <img className="app-header-back hide" src="/arrow-left.svg" alt="image" />
        <div className="app-header-text">Tất cả sự kiện</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>

      <div className="event-layout">
        <div className="myevent-row">
          <div className="my-event-txt">Sự kiện của tôi</div>
          <img className="event-icon-next" src="/arrow-right.svg" alt="image" />
        </div>

        <div className="list-event-layout">
          {courses.map((item) => {
            return <div className="my-event-item">
              <div className="my-event-item-left">
                <div className="my-event-item-left-type">{item.type}</div>
                <div className="my-event-item-left-name">{item.name}</div>
              </div>
              <div className="my-event-item-right">
                <img className="my-event-item-right-icon" src="/size-baihoc.svg" alt="image" />
              </div>
            </div>
          })}
        </div>
        
        <div className="grey-line"></div>
        <div className="myevent-row">
          <div className="my-event-txt">Sự kiện sắp diễn ra</div>
          <img className="event-icon-next" src="/arrow-right.svg" alt="image" />
        </div>

        <div className="list-lesson-layout">
          {eventList.map((item, index) => {
            return (
              <EventCard item={item} key={index} btnText="Xem thêm"/>
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default Event;

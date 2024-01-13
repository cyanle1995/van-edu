import { useState, useEffect } from "react";
import { Input } from "antd";
import Button from "components/button/Button";
import { Slider } from 'antd';
import { useDispatch } from "react-redux";
import "./styles.scss";
import { getListTopic } from "store/course/actions";
import { useSelector } from "react-redux";
import { getImageURL } from "utils/Utils";
import { useHistory } from "react-router-dom";

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
const freeLesson = [
  { id: 1, name: 'Tên bài học', teacher: 'Dang Tri', numOfVideo: 20 },
  { id: 2, name: 'Tên bài học', teacher: 'Dang Tri', numOfVideo: 10 },
  { id: 3, name: 'Tên bài học', teacher: 'Dang Tri', numOfVideo: 30 },
]
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
          {freeLesson.map((item) => {
            return <div className="lesson-item">
              <img className="lesson-item-img" src="/size-event.svg" alt="image" />
              <div className="lesson-name">{item.name}</div>
              <div className="lesson-teacher">{item.teacher}</div>
              <div className="lesson-row">
                <div className="lesson-video">
                  <img className="lesson-play-video" src="/play-video.svg" alt="image" />
                  <div className="lesson-play-video-txt">{`${item.numOfVideo} video`}</div>
                </div>
                <Button className='start-learn-button' key="back" text="Bắt đầu học" background="#6059E3" width={'50%'} />
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};
export default Event;

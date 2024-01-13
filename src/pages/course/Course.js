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
    type: 'UX',
    name: 'Khoá học UX Design',
    status: 25,
  },
  {
    type: 'UX',
    name: 'Khoá học UX Design nâng cao',
    status: 50,
  },
  {
    type: 'UX',
    name: 'Khoá học UX Design pro',
    status: 10,
  },
];

const freeLesson = [
  { id: 1, name: 'Tên bài học', teacher: 'Dang Tri', numOfVideo: 20 },
  { id: 2, name: 'Tên bài học', teacher: 'Dang Tri', numOfVideo: 10 },
  { id: 3, name: 'Tên bài học', teacher: 'Dang Tri', numOfVideo: 30 },
]
const Course = () => {
  const history = useHistory();
  let dispatch = useDispatch();
  const { topics } = useSelector((state) => state.CourseReducer);
  console.log('topicsxxx', topics);
  useEffect(() => {
    dispatch(getListTopic())
  }, [])
  const onGoToTopic = (id) => {
    history.push(`course/${id}`)
  }
  return (
    <div className="course-container">
      <div className="app-header">
        <img className="app-header-back hide" src="/arrow-left.svg" alt="image" />
        <div className="app-header-text">Danh sách khoá học</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="course-layout">
        <div className="mycourse-row">
          <div className="my-course-txt">Khoá học của tôi</div>
          <img className="course-icon-next" src="/arrow-right.svg" alt="image" />
        </div>
        <div className="list-course-layout">
          {courses.map((item) => {
            return <div className="my-course-item">
              <div className="my-course-item-left">
                <div className="my-course-item-left-type">{item.type}</div>
                <div className="my-course-item-left-name">{item.name}</div>
                <div className="my-course-item-left-status"><Slider defaultValue={item.status} disabled={false} dots={false} handleColorDisabled='#6059E3' /></div>
              </div>
              <div className="my-course-item-right">
                <img className="my-course-item-right-icon" src="/size-baihoc.svg" alt="image" />
              </div>
            </div>
          })}
        </div>
        <div className="grey-line"></div>
        <div className="course-topic-title">Chủ đề</div>
        <div className="course-topic-layout">
          {topics.map((item) => {
            return <div className="course-topic-item" key={item.id} onClick={() => onGoToTopic(item.id)}>
              <img className="topic-img" src={getImageURL(item?.attributes?.image?.data?.attributes?.url)} alt="image" />
              <div className="topic-name">{item?.attributes?.title}</div>
            </div>
          })}
        </div>
        <div className="mycourse-row">
          <div className="my-course-txt">Bài giảng miễn phí</div>
          <img className="course-icon-next" src="/arrow-right.svg" alt="image" />
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
export default Course;

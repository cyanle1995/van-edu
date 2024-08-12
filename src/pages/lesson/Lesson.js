import Button from "components/button/Button";
import "./styles.scss";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourseDetail } from "store/course/actions";
import { apiGetListLessonByCourse } from "helpers/api/course";
import { getImageURL } from "utils/Utils";
import _ from "lodash";

const Lesson = () => {
  let { courseId, lessonId } = useParams();
  let dispatch = useDispatch();
  const history = useHistory();
  const { courseDetail } = useSelector((state) => state.CourseReducer);
  const [course, setCourse] = useState({});
  console.log('course===', course);
  useEffect(() => {
    if (lessonId) {
      dispatch(getCourseDetail(lessonId));
    }
  }, [lessonId]);
  useEffect(() => {
    if (!_.isEmpty(courseDetail) && !course?.data) {
      apiGetListLessonByCourse(lessonId)
        .then((res) => {
          console.log("ress", res);
          if (res?.length > 0) {
            let courseData = { ...courseDetail };
            courseData.data = res;
            setCourse(courseData);
          }
        })
        .catch((error) => {});
    }
  }, [courseDetail]);
  const getCurrentDuration = (duration) => {
    if (duration) {
      if (duration > 60) {
        return `Video ${Math.floor(duration / 60)}:${Math.floor(
          duration % 60
        )} phút`;
      }
      return `Video ${duration} giây`;
    }
    return "Video 0 phút";
  };
  const gotoLessonDetail = (videoId) => {
    if (videoId && course["0"]?.is_free) {
      history.push(`/course/${courseId}/lesson/${lessonId}/detail/${videoId}`);
    }
  };
  const onGoBack = () => {
    history.push(`/course/${courseId}`);
  };
  const buyPremium = () => {
    history.push(`/course-payment`);
  };
  return (
    <div className="lesson-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">
          {course && course["0"] && course["0"].name}
        </div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="lesson-layout">
        {course["0"]?.thumb ? (
          <img
            className="lession-video-thumb"
            src={getImageURL(course["0"]?.thumb)}
            alt="image"
          />
        ) : (
          <img
            className="lession-video-thumb"
            src={"/img.jpg"}
            alt="image"
          />
        )}
        <div className="lession-video-name">{course["0"]?.description?.replace(/<[^>]+>/g, '')}</div>
        {/* <div className='lession-video-des-item'>- Thời gian yêu cầu 1 tiếng 1 ngày/ 6 tháng</div>
        <div className='lession-video-des-item'>- Bài tập: Theo yêu cầu của mentor</div> */}
        <div className="lession-mentor-layout">
          <img
            className="lession-mentor-img"
            src="/img-mentor.png"
            alt="image"
          />
          <div className="lession-mentor-info">
            <div className="lession-mentor-info-role">Mentor</div>
            {/* <div className='lession-mentor-info-name'>{`${course?.mentor?.firstname} ${course?.mentor?.lastname}, ${course?.mentor?.Age} tuổi`} </div> */}
          </div>
        </div>
        <div className="grey-line"></div>
        <div className="lession-course-content-title">Nội dung bài học</div>
        <div className="lession-course-list-layout">
          {course?.data?.map((item, index) => {
            return (
              <div
                className="lession-course-item"
                key={index}
                onClick={() => gotoLessonDetail(item.id)}
              >
                <div className="lession-course-item-num">{`${
                  index < 9 ? "0" : ""
                }${index + 1}`}</div>
                <div className="lession-course-item-content">
                  <div className="lession-course-item-content-time">
                    {getCurrentDuration(item.duration)}
                  </div>
                  <div className="lession-course-item-content-title">
                    {item?.name}
                  </div>
                </div>
                <img
                  className="lession-course-item-icon"
                  src="/video-pause.png"
                  alt="image"
                />
              </div>
            );
          })}
        </div>
        <div className="w-full-center">
          {course && course["0"] && course["0"]?.is_free && (
            <Button
              className="start-learn-button"
              key="back"
              text="Bắt đầu học"
              background="#6059E3"
              width={"50%"}
              onClick={() => gotoLessonDetail(course?.data[0]?.id)}
            />
          )}
          {course && course["0"] && !course["0"].is_free && (
            <Button
              className="start-learn-button"
              key="back"
              text="Mua premium"
              background="#6059E3"
              width={"50%"}
              onClick={buyPremium}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Lesson;

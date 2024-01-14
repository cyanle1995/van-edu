import { useParams, useHistory } from 'react-router-dom';
import "./styles.scss";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetail, getListCourseByTopic, getListTopic } from 'store/course/actions';
import { apiGetListLessonByCourse } from 'helpers/api/course';
import { getImageURL } from 'utils/Utils';


const Topic = () => {
  let { courseId } = useParams();
  let dispatch = useDispatch();
  const history = useHistory();
  const { courses, topics } = useSelector((state) => state.CourseReducer);
  const [courseData, setCourseData] = useState([]);
  console.log('coursesxxx', courses);
  console.log('courseDataxxx', courseData);
  console.log('courseId', courseId);
  console.log('topics', topics);
  useEffect(() => {
    if (courseId) {
      dispatch(getListCourseByTopic(courseId))
      dispatch(getListTopic())
    }
  }, [courseId])
  useEffect(() => {
    if (courses?.length > 0) {
      const promises = []
      courses.forEach(c => {
        if (c.id) {
          promises.push(apiGetListLessonByCourse(c.id));
        }
      });
      Promise.allSettled(promises).then((results) => {
        if (results.filter(r => r.status === 'fulfilled')?.length === promises?.length) {
          const cData = courses.map((item, index) => {
            return {
              ...item,
              data: results[index]?.value || []
            }
          })
          setCourseData(cData)
        }
      });
    } else {
      setCourseData([])
    }
  }, [courses])

  const onDetailCourse = (lessonId, videoId, course) => {
    if (!course?.attributes?.is_free) {
      history.push(`/course-payment`)
    } else {
      history.push(`/course/${courseId}/lesson/${lessonId}/detail/${videoId}`)
    }
    
  }
  const onGoToLesson = (id) => {
    history.push(`/course/${courseId}/lesson/${id}`)
  }
  const onGoBack = () => {
    history.push(`/course`)
  }
  const onSelectTopic = (id) => {
    history.push(`/course/${id}`)
  }
  return (
    <div className="topic-container">
      <div className="app-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" onClick={onGoBack}/>
        <div className="app-header-text">Thiền toạ</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="topic-layout">
        <div className="topic-list-row">
          {topics.map((item, index) => {
            if (courseId == item.id) return <div className="topic-item-selected" onClick={() => onSelectTopic(item.id)}>{item?.attributes?.title}</div>
            return <div className="topic-item" onClick={() => onSelectTopic(item.id)}>{item?.attributes?.title}</div>
          })}
        </div>
        {courseData?.length > 0 && courseData.map((item) => {
          return <>
            <div className="grey-line"></div>
            <div className="first-topic-row" onClick={()=>onGoToLesson(item.id)}>
              <div className="my-course-txt">{item?.attributes?.title}</div>
              <img className="course-icon-next" src="/arrow-right.svg" alt="image" />
            </div>
            <div className="list-first-course-layout">
              {item?.data && item?.data.map((les) => {
                return <div className="first-course-item" onClick={()=>onDetailCourse(item.id, les.id, item)}>
                  <img className="first-course-item-img" src={getImageURL(les?.thumb?.url)} alt="image" />
                  <div className="first-course-name">{les.title}</div>
                  {/* <div className="first-course-teacher">{item.teacher}</div> */}
                </div>
              })}
            </div>
          </>
        })}

      </div>
    </div>
  );
};
export default Topic;

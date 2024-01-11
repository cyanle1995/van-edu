import { useParams, useHistory } from 'react-router-dom';
import "./styles.scss";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetail, getListCourseByTopic } from 'store/course/actions';
import { apiGetListLessonByCourse } from 'helpers/api/course';
import { getImageURL } from 'utils/Utils';

const topics = [
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
  { id: 1, name: '[TT05] Thiền toạ cơ bản cho người mới bắt đầu', teacher: 'Dang Tri' },
  { id: 2, name: '[TT05] Thiền toạ cơ bản cho người mới bắt đầu', teacher: 'Dang Tri' },
  { id: 3, name: '[TT05] Thiền toạ cơ bản cho người mới bắt đầu', teacher: 'Dang Tri' },
]
const Topic = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const history = useHistory();
  const { courses } = useSelector((state) => state.CourseReducer);

  const [courseData, setCourseData] = useState([]);
  console.log('coursesxxx', courses);
  console.log('courseDataxxx', courseData);
  useEffect(() => {
    if (id) {
      dispatch(getListCourseByTopic(id))
    }
  }, [id])
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
    }
  }, [courses])

  const onDetailCourse = (id) => {
    dispatch(getCourseDetail(id))
  }
  const onGoToLesson = (id) => {
    history.push(`/lesson/${id}`)
  }
  return (
    <div className="topic-container">
      <div className="app-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" />
        <div className="app-header-text">Thiền toạ</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="topic-layout">
        <div className="topic-list-row">
          {topics.map((item, index) => {
            if (index === 0) return <div className="topic-item-selected">{item.name}</div>
            return <div className="topic-item">{item.name}</div>
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
                return <div className="first-course-item" onClick={()=>onDetailCourse(les.id)}>
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

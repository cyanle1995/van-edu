import Button from "components/button/Button";
import "./styles.scss";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getCourseDetail } from "store/course/actions";
import { apiGetListLessonByCourse } from "helpers/api/course";
import { getImageURL } from "utils/Utils";

const videos = [
  { number: '01', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '02', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '03', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '04', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '05', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '06', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '07', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '08', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '09', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
  { number: '10', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
]
const Lesson = () => {
  let { id } = useParams();
  let dispatch = useDispatch();

  const { courseDetail } = useSelector((state) => state.CourseReducer);
  console.log('courseDetail', courseDetail);
  const [course, setCourse] = useState({})
  console.log('courseaaaa', course);
  useEffect(() => {
    if (id) {
      dispatch(getCourseDetail(id));

    }
  }, [id])
  useEffect(() => {
    if (courseDetail && !course?.data) {
      apiGetListLessonByCourse(id).then(res => {
        console.log('ress', res);
        if (res?.length > 0) {
          let courseData = { ...courseDetail };
          courseData.data = res;
          setCourse(courseData)
        }
      }).catch(error => {
        console.log('errorxxx', error);
      })
    }
  }, [courseDetail])
  return (
    <div className="lesson-container">
      <div className="app-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" />
        <div className="app-header-text">{course?.course?.title}</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
        
      </div>
      <div className="lesson-layout">
      <img className="lession-video-thumb" src={getImageURL(course?.course?.thumb?.url)} alt="image" />
        <div className='lession-video-name'>{course?.course?.description}</div>
        {/* <div className='lession-video-des-item'>- Thời gian yêu cầu 1 tiếng 1 ngày/ 6 tháng</div>
        <div className='lession-video-des-item'>- Bài tập: Theo yêu cầu của mentor</div> */}
        <div className='lession-mentor-layout'>
          <img className="lession-mentor-img" src="/img-mentor.png" alt="image" />
          <div className='lession-mentor-info'>
            <div className='lession-mentor-info-role'>Mentor</div>
            <div className='lession-mentor-info-name'>{`${course?.mentor?.firstname} ${course?.mentor?.lastname}, ${course?.mentor?.Age} tuổi`} </div>
          </div>
        </div>
        <div className="grey-line"></div>
        <div className='lession-course-content-title'>Nội dung bài học</div>
        <div className='lession-course-list-layout'>
          {videos.map((item) => {
            return <div className='lession-course-item' key={item.number}>
              <div className='lession-course-item-num'>{item.number}</div>
              <div className='lession-course-item-content'>
                <div className='lession-course-item-content-time'>{`${item.fileType} ${item.time}`}</div>
                <div className='lession-course-item-content-title'>{item.title}</div>
              </div>
              <img className="lession-course-item-icon" src="/video-pause.png" alt="image" />
            </div>
          })}
        </div>
        <div className="w-full-center">
          <Button className='start-learn-button' key="back" text="Bắt đầu học" background="#6059E3" width={'50%'} />
        </div>
      </div>
    </div>
  );
};
export default Lesson;

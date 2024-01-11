import Button from "components/button/Button";
import ReactPlayer from 'react-player'
import "./styles.scss";
import { Input } from 'antd';

const { TextArea } = Input;

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
const LessonDetail = () => {
  return (
    <div className="lesson-detail-container">
      <div className="app-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" />
        <div className="app-header-text">Thiền toạ cơ bản</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="lesson-layout">
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height={'220px'} />

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
        <div className="w-full-center mb-20">
          <Button className='start-learn-button' key="back" text="Kết thúc khoá học" background="#6059E3" width={'80%'} />
        </div>
        <div className="grey-line mb-20"></div>
        <TextArea rows={4} />
        <div className="lesson-comment-layout">
          <Button className='lesson-comment-button' key="back" text="Comment" background="#ffffff" textColor='#817BEC' borderColor='#817BEC' width={'120px'} />
        </div>
        <div className="lesson-total-comment">(65) Comment: </div>
        <div className="lesson-comment-item">
          <div className="lesson-comment-item-row">
            <img className="lession-comment-ava" src="/img-mentor.png" alt="image" />
            <div className="lesson-comment-name">Nguyễn Văn A</div>
          </div>
          <div className="lesson-comment-content">Bài học rất hay, dễ tiếp thu, tôi đã học được rất nhiều, recommend cho các bạn nên học nhé.</div>
        </div>
        <div className="lesson-comment-item">
          <div className="lesson-comment-item-row">
            <img className="lession-comment-ava" src="/img-mentor.png" alt="image" />
            <div className="lesson-comment-name">Nguyễn Văn A</div>
          </div>
          <div className="lesson-comment-content">Bài học rất hay, dễ tiếp thu, tôi đã học được rất nhiều, recommend cho các bạn nên học nhé.</div>
        </div>
        <div className="lesson-comment-item">
          <div className="lesson-comment-item-row">
            <img className="lession-comment-ava" src="/img-mentor.png" alt="image" />
            <div className="lesson-comment-name">Nguyễn Văn A</div>
          </div>
          <div className="lesson-comment-content">Bài học rất hay, dễ tiếp thu, tôi đã học được rất nhiều, recommend cho các bạn nên học nhé.</div>
        </div>
      </div>
    </div>
  );
};
export default LessonDetail;

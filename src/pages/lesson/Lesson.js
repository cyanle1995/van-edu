import Button from "components/button/Button";
import "./styles.scss";

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
  return (
    <div className="lesson-container">
      <div className="app-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" />
        <div className="app-header-text">Mức độ sơ cấp</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="lesson-layout">
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height={'220px'}/> */}
        <img className="lession-video-thumb" src="/video-thumb.png" alt="image" />
        <div className='lession-video-name'>[TT05] Thiền toạ cơ bản cho người mới bắt đầu - 22/07/2023</div>
        <div className='lession-video-des'>Ở lớp này bạn sẽ được học cách thiền cơ bản nhất, tĩnh tâm lắng nghe bản thân, sự vật hiện diện xung quanh có mentor hỗ trợ 1/1</div>
        <div className='lession-video-des-item'>- Thời gian yêu cầu 1 tiếng 1 ngày/ 6 tháng</div>
        <div className='lession-video-des-item'>- Bài tập: Theo yêu cầu của mentor</div>
        <div className='lession-mentor-layout'>
          <img className="lession-mentor-img" src="/img-mentor.png" alt="image" />
          <div className='lession-mentor-info'>
            <div className='lession-mentor-info-role'>Mentor</div>
            <div className='lession-mentor-info-name'>David, 32 tuổi </div>
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

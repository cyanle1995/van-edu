import Button from "components/button/Button";
import ReactPlayer from 'react-player'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import "./styles.scss";
import { Input } from 'antd';
import { getCourseDetail } from "store/course/actions";
import { apiGetComments, apiGetListLessonByCourse, apiPostComment } from "helpers/api/course";
import { getImageURL } from "utils/Utils";

const { TextArea } = Input;

// const videos = [
//   { number: '01', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '02', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '03', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '04', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '05', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '06', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '07', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '08', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '09', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
//   { number: '10', fileType: 'video', time: '5:25 phút', title: 'Chào mừng đến với khoá học' },
// ]
const LessonDetail = () => {
  let { courseId, lessonId, videoId } = useParams();
  let dispatch = useDispatch();
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [videoPlaying, setVideoPlaying] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
console.log('comment====', comment);
  useEffect(() => {
    if (lessonId) {
      apiGetListLessonByCourse(lessonId).then(res => {

        if (res?.length > 0) {
          setVideos(res);
          const foundVideo = res.find((item) => item.id == videoId);
          setVideoPlaying(foundVideo)
        } else {
          setVideos([]);
        }
        getListComment()
      }).catch(error => {
        setVideos([]);
      })
    }
  }, [lessonId])
  const getListComment = () => {
    apiGetComments(courseId).then(res => {
      console.log('ress', res);
      if (res?.data?.length > 0) {
        setComments(res.data)
      } else {
        setComments([])
      }
    }).catch(error => {
      console.log('errorrrr', error);
      setComments([])
    })
  }
  const getCurrentDuration = (duration) => {
    if (duration) {
      if (duration > 60) {
        return `Video ${Math.floor(duration / 60)}:${Math.floor(
          duration % 60
        )} phút`
      }
      return `Video ${duration} giây`
    }
    return 'Video 0 phút'
  }
  console.log('videoPlaying', videoPlaying);
  const gotoLessonDetail = (video) => {
    if (video.id) {
      history.push(`/course/${courseId}/lesson/${lessonId}/detail/${video?.id}`);
      setVideoPlaying(video);
    }
  }
  const onGoBack = () => {
    history.push(`/course/${courseId}/lesson/${lessonId}`)
  }
  const onComment = () => {
    apiPostComment(courseId, {
      content: comment
    }).then(res => {
      console.log('comment res', res);
      getListComment()
    }).catch(error => {
      console.log('comment error', error);
    })
  } 
  const onFinish=() => {
    history.push(`/course/${courseId}/exam`)
  }
  return (
    <div className="lesson-detail-container">
      <div className="app-header">
        <img className="app-header-back" src="/arrow-left.svg" alt="image" onClick={onGoBack} />
        <div className="app-header-text">{videoPlaying?.title}</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="lesson-layout">
        <ReactPlayer controls={true} playing={true} url={getImageURL(videoPlaying?.media?.url)} width='100%' height={'220px'} />
        <div className='lession-course-list-layout'>
          {videos.map((item, index) => {
            return <div className='lession-course-item' key={index} onClick={() => gotoLessonDetail(item)}>
              <div className='lession-course-item-num'>{`${index < 9 ? '0' : ''}${index + 1
                }`}</div>
              <div className='lession-course-item-content'>
                <div className='lession-course-item-content-time'>{getCurrentDuration(item.duration)}</div>
                <div className='lession-course-item-content-title'>{item.title}</div>
              </div>
              <img className="lession-course-item-icon" src="/video-pause.png" alt="image" />
            </div>
          })}
        </div>
        <div className="w-full-center mb-20">
          <Button className='start-learn-button' key="back" text="Kết thúc khoá học" background="#6059E3" width={'80%'} onClick={onFinish}/>
        </div>
        <div className="grey-line mb-20"></div>
        <TextArea rows={4} onChange={(e) => {setComment(e.target.value)}}/>
        <div className="lesson-comment-layout">
          <Button className='lesson-comment-button' key="back" text="Comment" background="#ffffff" textColor='#817BEC' borderColor='#817BEC' width={'120px'} disabled={!comment} onClick={onComment}/>
        </div>
        <div className="lesson-total-comment">(65) Comment: </div>
        {comments?.length > 0 && comments.map(item => {
          return <div className="lesson-comment-item" key={item.id}>
            <div className="lesson-comment-item-row">
              <img className="lession-comment-ava" src="/img-mentor.png" alt="image" />
              {/* { item?.author?.avatar  ? <img className="lession-comment-ava" src={item?.author?.avatar} alt="image" /> : <img className="lession-comment-ava" src="/img-mentor.png" alt="image" /> } */}
              <div className="lesson-comment-name">{item?.author?.name}</div>
            </div>
            <div className="lesson-comment-content">{item?.content}</div>
          </div>
        })}
      </div>
    </div>
  );
};
export default LessonDetail;

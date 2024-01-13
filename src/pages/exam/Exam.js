import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Button from "components/button/Button";
import { Checkbox, Radio } from 'antd';
import { apiGetExams } from "helpers/api/course";
import Modal from "components/modal/Modal";
import ResultExam from './components/resultExam';
const STATUS = {
  INIT: 'INIT',
  STARTED: 'STARTED',
  VIEW_RESULT: 'VIEW_RESULT',
}
const Exam = () => {
  const Ref = useRef(null);
  let { courseId } = useParams();
  const history = useHistory();
  const [status, setStatus] = useState(STATUS.INIT)

  const [questions, setQuestions] = useState([])
  console.log('questionsxxx', questions);
  const [currQuestion, setCurrQuestion] = useState({})
  const [showModalExit, setShowModalExit] = useState(false)
  const [showModalTimeout, setShowModalTimeout] = useState(false)
  const [timer, setTimer] = useState("00:00");

  console.log('currQuestion', currQuestion);
  useEffect(() => {
    apiGetExams(9).then(res => {
      if (res?.data?.length > 0) {
        res.data.forEach(ele => {
          ele.attributes.user_answers.data = []
        });
        setQuestions(res.data);
        setCurrQuestion(res.data[0]);
      }
    }).catch(error => {
    })
    clearTimer(getDeadTime());
  }, [])
  const getTimeRemaining = (e) => {
    const total =
      Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor(
      (total / 1000 / 60) % 60
    );
    if (total === 0) {
      if (Ref.current) clearInterval(Ref.current);
      setShowModalTimeout(true)
    }
    return {
      total,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, minutes, seconds } =
      getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9
          ? minutes
          : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    setTimer("00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 1800);
    return deadline;
  };
  const onAnswerMultiple = (id) => {
    let newCurrQuestion = { ...currQuestion };
    const found = currQuestion.attributes.user_answers.data.find(item => item == id);
    if (!found) {
      newCurrQuestion.attributes.user_answers.data.push(id);
    } else {
      newCurrQuestion.attributes.user_answers.data = newCurrQuestion.attributes.user_answers.data.filter(item => item != id)
    }
    setCurrQuestion(newCurrQuestion)
  }
  const onAnswerSingle = (id) => {
    let newCurrQuestion = { ...currQuestion };
    newCurrQuestion.attributes.user_answers.data = [id];
    setCurrQuestion(newCurrQuestion)
  }
  const onPrevious = () => {
    const index = questions.findIndex(item => item.id === currQuestion.id);
    if (index !== 0) {
      setCurrQuestion(questions[index - 1])
    }
  }
  const onNext = () => {
    const index = questions.findIndex(item => item.id === currQuestion.id);
    if (index < questions.length - 1) {
      setCurrQuestion(questions[index + 1])
    } else {
      setStatus(STATUS.VIEW_RESULT);
      if (Ref.current) clearInterval(Ref.current);
    }
  }
  const onQuitExam = () => {
    setShowModalExit(true)
  }
  const onContinue = () => {
    setShowModalExit(false);
  }
  const onExit = () => {
    history.push(`/course/${courseId}`)
  }
  const onViewResult = () => {
    setShowModalTimeout(false);
    setStatus(STATUS.VIEW_RESULT)
  }
  const modalExitContent = () => {
    return (
      <div className="modal-confirm-container">
        <img className="modal-confirm-warning-icon" src="/warning.png" alt="image" />
        <div className="modal-confirm-warning-message">Nếu bạn thoát, sẽ mất quá trình và phải làm lại từ đầu?</div>
        <div className="modal-confirm-footer">
          <Button className='modal-confirm-footer-exit' text="Thoát" background="#FFFFFF" width={'120px'} textColor='#FF424E' onClick={onExit} />
          <Button className='exam-started-footer-pre' text="Làm tiếp" background="#6059E3" width={'120px'} onClick={onContinue} />
        </div>
      </div>)
  }
  const modalTimeoutContent = () => {
    return (
      <div className="modal-confirm-container">
        <img className="modal-confirm-warning-icon" src="/fluent_timer-32-regular.png" alt="image" />
        <div className="modal-confirm-warning-message">Hết giờ thi! Bài làm của bạn đã tự động nộp</div>
        <div className="modal-confirm-footer">
          <Button className='exam-started-footer-pre' text="Xem kết quá" background="#6059E3" width={'120px'} textColor='white' onClick={onViewResult} />
        </div>
      </div>)
  }
  const isFirstQuestion = questions.findIndex(item => item.id === currQuestion.id) === 0;
  const isLastQuestion = questions.findIndex(item => item.id === currQuestion.id) === questions.length - 1;

  if (status === STATUS.STARTED) {
    return (
      <div className="exam-container">
        <img className="exam-started-bg" src="/login-background.svg" alt="image" />
        <div className="exam-started-layout">
          <div className="exam-started-header">
            <div className="exam-started-header-back" onClick={onQuitExam}><img className="exam-started-header-back-icon" src="/arrow-right-2.png" alt="image" /></div>
            <div className="exam-started-header-time">
              <img className="exam-started-header-time-icon" src="/Clock.png" alt="image" />
              <div className="exam-started-header-time-value" >{timer}</div>
            </div>
          </div>
          <div className="exam-started-progress">
            {questions.map(item => {
              if (item.id === currQuestion.id) return <div className="exam-started-progress-item-active"></div>
              return <div className="exam-started-progress-item"></div>
            })}
          </div>
          <div className="exam-started-qa-layout">
            <div className="exam-started-title">Chọn đáp án đúng</div>
            <div className="exam-started-question">{currQuestion?.attributes?.question}</div>
            {currQuestion?.attributes?.type === "multiple" &&
              currQuestion?.attributes?.examination_answers?.data?.map(item => {
                return <div className="exam-started-answer-layout" onClick={() => onAnswerMultiple(item.id)}><Checkbox checked={currQuestion?.attributes?.user_answers?.data.includes(item.id)} key={item.id}>{item?.attributes?.answer}</Checkbox></div>
              })
            }
            {currQuestion?.attributes?.type === "single" &&
              currQuestion?.attributes?.examination_answers?.data?.map(item => {
                return <div className="exam-started-answer-layout" onClick={() => onAnswerSingle(item.id)}><Radio checked={currQuestion?.attributes?.user_answers?.data.includes(item.id)} key={item.id}>{item?.attributes?.answer}</Radio></div>
              })
            }
          </div>
          <div className="exam-started-footer">
            <Button className='exam-started-footer-pre' text="Câu trước" background={isFirstQuestion ? "#F5F5FA" : "#6059E3"} textColor={isFirstQuestion ? 'black' : 'white'} width={'160px'} onClick={onPrevious} disabled={isFirstQuestion} />
            <Button className='exam-started-footer-next' text={isLastQuestion ? "Hoàn thành" : "Tiếp"} background={"#6059E3"}  width={'160px'} onClick={onNext} disabled={currQuestion?.attributes?.user_answers?.data?.length === 0}/>
          </div>
        </div>
        <Modal showModal={showModalExit} width='80%' closeIcon={false} content={modalExitContent()} footer={false} />
        <Modal showModal={showModalTimeout} width='80%' closeIcon={false} content={modalTimeoutContent()} footer={false} />
      </div>
    )
  }
  if (status === STATUS.VIEW_RESULT) {
    return <ResultExam timer={timer} questions={questions}/>
  }
  return (
    <div className="exam-container">
      <div className="exam-close-icon-layout"><img className="exam-close-icon" src="/close.png" alt="image" /></div>
      <img className="exam-intro-icon" src="/exam.png" alt="image" />
      <div className="exam-intro-layout">
        <div className="exam-intro-time">Thời gian làm bài 30 phút</div>
        <div className="exam-intro-title">Kiểm tra kết thúc khoá học</div>
        <div className="exam-intro-item">
          <img className="exam-intro-item-icon" src="/circle.png" alt="image" />
          <div className="exam-intro-item-content">Hoàn thành: 80% hoặc cao hơn</div>
        </div>
        <div className="exam-intro-item">
          <img className="exam-intro-item-icon" src="/circle.png" alt="image" />
          <div className="exam-intro-item-content">Hoàn thành: 80% hoặc cao hơn</div>
        </div>
        <div className="exam-intro-item">
          <img className="exam-intro-item-icon" src="/circle.png" alt="image" />
          <div className="exam-intro-item-content">Hoàn thành: 80% hoặc cao hơn</div>
        </div>
      </div>
      <Button onClick={() => setStatus(STATUS.STARTED)} className='start-exam-button' key="back" text="Bắt đầu thi" background="#6059E3" width={'80%'} />

    </div>
  );
};
export default Exam;

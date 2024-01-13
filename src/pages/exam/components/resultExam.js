import { Container } from "react-bootstrap";
import "./styles.scss";
import { useEffect, useState } from "react";
import ButtonComponent from "components/button/Button";
import _ from 'lodash';
import {  useHistory } from 'react-router-dom';
import Button from "components/button/Button";
import Modal from "components/modal/Modal";

const ResultExam = (props) => {
  console.log('props', props);
  const history = useHistory();
  const { timer, questions } = props;
  const [data, setData] = useState([]);
  const [mark, setMark] = useState(0);

  const [showModal, setShowModal] = useState(false)

  console.log('dataxxx', data);
  useEffect(() => {
    if (questions && questions.length) {
      const questionsList = questions.map((item) => {
        const answerList = item.attributes.examination_answers.data.map(
          (answer) => {
            return {
              id: answer.id,
              value: answer.attributes.answer,
              is_true_answer: answer.attributes.is_true_answer,
            };
          }
        );
        return {
          id: item.id,
          type: item.attributes.type,
          question: item.attributes.question,
          answers: answerList,
          userAnswer: item?.attributes?.user_answers?.data
        };
      });
      setData(questionsList);
      let numberCorrectAnswer = 0;
      questionsList.forEach(q => {
        const questionResult = q.answers.filter(item => item.is_true_answer).map(item => item.id);
        console.log('questionResult', questionResult);
        if (_.isEqual(questionResult, q.userAnswer)) {
          numberCorrectAnswer++;
        }
      });
      setMark(parseInt(numberCorrectAnswer * 100 / questionsList?.length))
      console.log('numberCorrectAnswer', numberCorrectAnswer);
    }
  }, [questions]);
  const onSubmit = () => {
    if (mark >= 80) {
      setShowModal(true)
    } else {

    }
  }
  const onCancel = () => {
    history.push(`/course`)
  }
  const onContinue = () => {
    history.push(`/course`)
  }
  const modalContent = () => {
    return (
      <div className="modal-exam-success-container">
        <img className="modal-exam-success-icon" src="/khoanh-tick.png" alt="image" />
        <div className="modal-exam-success-message">Chúc mừng bạn đã vượt qua bài thi</div>
        <div className="modal-exam-success-point">Điểm hoàn thành: {mark}%</div>
        <div className="modal-exam-success-point-note">Hoàn thành: 80% hoặc cao hơn</div>
        <div className="modal-exam-success-footer">
          <Button className='exam-started-footer-pre' text="Tiếp tục học" background="#6059E3" width={'120px'} onClick={onContinue} />
        </div>
      </div>)
  }
  return (
    <Container className="result-exam-page-container">
      <header className="result-exam-header">Hoàn tất bài thi</header>

      <main className="result-exam-main">
        <div className="result">
          <div className="mark">
            <div className={`percent ${mark >= 80 ? "pass" : "fail"}`}>
              {mark}%
            </div>
            <div className="guide-text">Yêu cầu: 80% hoặc cao hơn</div>
          </div>
          <div className="time">
            <img className="icon" src="/clock.svg" />
            <div className="text">{timer}</div>
          </div>
        </div>

        <div className="answers">
          <div className="header">Đáp án</div>
          <div className="answers-list">
            {data.map((item) => {
              return (
                <div className="answer-item" key={item.id}>
                  <div className="question">{item.question}</div>
                  {item.answers.map((answer) => {
                    return (
                      <div
                        className={`answer ${answer.is_true_answer ? "correct" : "wrong"
                          }`}
                        key={answer.id}
                      >
                        <div className={`icon-${item.type}`}>
                          <img
                            src={
                              answer.is_true_answer ? "/tick.svg" : "/close.svg"
                            }
                            alt="icon"
                          />
                        </div>
                        <div>{answer.value}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="result-exam-footer">
        <ButtonComponent
          className="button"
          text={mark >= 80 ? "Xong" : "Làm lại"}
          background="#6059E3"
          width="100%"
          height="24px"
          onClick={onSubmit}
        />
        {mark < 80 && (
          <ButtonComponent
            className="button"
            text="Để sau"
            background="#6059E3"
            width="100%"
            height="24px"
            onClick={onCancel}
          />
        )}
      </footer>
      <Modal showModal={showModal} width='80%' closeIcon={false} content={modalContent()} footer={false} />
    </Container>
  );
};

export default ResultExam;

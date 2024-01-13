import { Container } from "react-bootstrap";
import "./styles.scss";
import { useEffect, useState } from "react";
import ButtonComponent from "components/button/Button";

const mark = 60;
const questionList = [
  {
    id: 1,
    attributes: {
      type: "single",
      question:
        "Who among the following does not have the record playing the most cup?",
      createdAt: "2024-01-09T14:07:06.246Z",
      updatedAt: "2024-01-09T14:07:08.099Z",
      publishedAt: "2024-01-09T14:07:08.092Z",
      courses: {
        data: [
          {
            id: 9,
            attributes: {
              title: "chũa lành miễn phí",
              description:
                "[TT05] Thiền toạ cơ bản cho người mới bắt đầu - 22/07/2023",
              createdAt: "2023-12-02T16:03:16.752Z",
              updatedAt: "2023-12-22T17:48:49.737Z",
              publishedAt: "2023-12-02T16:03:22.777Z",
              sort: null,
              is_free: true,
              online_offline: "Online",
            },
          },
        ],
      },
      examination_answers: {
        data: [
          {
            id: 1,
            attributes: {
              answer: "tra loi 1",
              is_true_answer: true,
              createdAt: "2024-01-09T14:07:38.871Z",
              updatedAt: "2024-01-09T14:07:38.871Z",
              publishedAt: "2024-01-09T14:08:19.923Z",
            },
          },
          {
            id: 2,
            attributes: {
              answer: "tra loi 2",
              is_true_answer: false,
              createdAt: "2024-01-09T14:07:48.496Z",
              updatedAt: "2024-01-09T14:08:49.999Z",
              publishedAt: "2024-01-09T14:08:19.923Z",
            },
          },
          {
            id: 5,
            attributes: {
              answer: "tra loi 3",
              is_true_answer: false,
              createdAt: "2024-01-10T11:42:14.760Z",
              updatedAt: "2024-01-10T11:42:16.248Z",
              publishedAt: "2024-01-10T11:42:16.240Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      type: "multiple",
      question:
        "Who among the following does not have the record playing the most cup?",
      createdAt: "2024-01-10T04:43:59.160Z",
      updatedAt: "2024-01-10T04:45:19.033Z",
      publishedAt: "2024-01-10T04:45:29.277Z",
      courses: {
        data: [
          {
            id: 9,
            attributes: {
              title: "chũa lành miễn phí",
              description:
                "[TT05] Thiền toạ cơ bản cho người mới bắt đầu - 22/07/2023",
              createdAt: "2023-12-02T16:03:16.752Z",
              updatedAt: "2023-12-22T17:48:49.737Z",
              publishedAt: "2023-12-02T16:03:22.777Z",
              sort: null,
              is_free: true,
              online_offline: "Online",
            },
          },
        ],
      },
      examination_answers: {
        data: [
          {
            id: 3,
            attributes: {
              answer: "phương án 1",
              is_true_answer: false,
              createdAt: "2024-01-10T04:44:19.062Z",
              updatedAt: "2024-01-10T04:44:31.539Z",
              publishedAt: "2024-01-10T04:45:38.119Z",
            },
          },
          {
            id: 4,
            attributes: {
              answer: "phuong án 2",
              is_true_answer: true,
              createdAt: "2024-01-10T04:44:51.106Z",
              updatedAt: "2024-01-10T04:44:51.106Z",
              publishedAt: "2024-01-10T04:45:38.119Z",
            },
          },
          {
            id: 6,
            attributes: {
              answer: "phuong án 3",
              is_true_answer: true,
              createdAt: "2024-01-10T11:42:29.768Z",
              updatedAt: "2024-01-10T11:43:11.245Z",
              publishedAt: "2024-01-10T11:43:11.239Z",
            },
          },
          {
            id: 7,
            attributes: {
              answer: "phuong án multi 4",
              is_true_answer: false,
              createdAt: "2024-01-10T11:43:46.789Z",
              updatedAt: "2024-01-10T11:43:47.938Z",
              publishedAt: "2024-01-10T11:43:47.928Z",
            },
          },
          {
            id: 8,
            attributes: {
              answer: "phuong án 5",
              is_true_answer: false,
              createdAt: "2024-01-10T11:44:00.397Z",
              updatedAt: "2024-01-10T11:44:34.539Z",
              publishedAt: "2024-01-10T11:44:34.524Z",
            },
          },
        ],
      },
    },
  },
];

const ResultExam = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (questionList && questionList.length) {
      const questions = questionList.map((item) => {
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
        };
      });

      setData(questions);
    }
  }, [questionList]);

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
            <div className="text">29:15</div>
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
                        className={`answer ${
                          answer.is_true_answer ? "correct" : "wrong"
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
        />
        {mark < 80 && (
          <ButtonComponent
            className="button"
            text="Để sau"
            background="#6059E3"
            width="100%"
            height="24px"
          />
        )}
      </footer>
    </Container>
  );
};

export default ResultExam;

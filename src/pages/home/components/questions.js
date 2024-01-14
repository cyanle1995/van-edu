import "../styles.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Questions = () => {
  const { questions } = useSelector((state) => state.HomeReducer);

  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    if (questions && questions.length) {
      const response = questions.map((item) => {
        return {
          id: item.id,
          question: item.attributes.question,
          answer: item.attributes.answer,
          isOpen: false,
        };
      });

      setQuestionList(response);
    }
  }, [questions]);

  const onOpenQuestion = (id) => {
    let newQuestions = [...questionList];
    const idx = newQuestions.findIndex((item) => item.id === id);
    let currentQuestion = {
      ...newQuestions[idx],
      isOpen: !newQuestions[idx].isOpen,
    };
    newQuestions[idx] = currentQuestion;
    setQuestionList(newQuestions);
  };

  return (
    <div className="question-container">
      <div className="heading">Câu hỏi thường gặp</div>

      <div className="question-list">
        {questionList.map((item) => {
          return (
            <div className="question-item" key={item.id}>
              <div className="question-title">
                <div className="text">{item.question}</div>
                <img
                  className="icon"
                  src={item.isOpen ? "/down.svg" : "/right.svg"}
                  alt="image"
                  onClick={() => onOpenQuestion(item.id)}
                />
              </div>

              {item.isOpen && <div className="answer">{item.answer}</div>}
            </div>
          );
        })}
      </div>

      <div className="contact">Liên hệ chuyên gia</div>
    </div>
  );
};

export default Questions;

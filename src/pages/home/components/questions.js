import "../styles.scss";
import Button from "components/button/Button";

const questionList = [
  {
    question: "Label",
    answer: "Lorem ipsum dolor sit amet consectetur. Ornare mattis amet auctor nibh feugiat dictumst sed. Tristique tincidunt lorem parturient vitae faucibus elementum.",
  },
  {
    question: "Label",
    answer: "Lorem ipsum dolor sit amet consectetur. Ornare mattis amet auctor nibh feugiat dictumst sed. Tristique tincidunt lorem parturient vitae faucibus elementum.",
  },
  {
    question: "Label",
    answer: "Lorem ipsum dolor sit amet consectetur. Ornare mattis amet auctor nibh feugiat dictumst sed. Tristique tincidunt lorem parturient vitae faucibus elementum.",
  },
];

const Questions = () => {
  return (
    <div className="question-container">
      <div className="heading">Câu hỏi thường gặp</div>

      <div className="question-list">
        {questionList.map((item, index) => {
          return (
            <div className="question-item" key={index}>
              <div className="question-title">
                <div className="text">{item.question}</div>
                <img className="icon" src="/down.svg" alt="image" />
              </div>

              <div className="answer">{item.answer}</div>
            </div>
          );
        })}
      </div>

      <Button className='contact' key="back" text="Liên hệ chuyên gia" background="#FFFFFF" textColor='#817BEC' width={'50%'} />
    </div>
  );
};

export default Questions;

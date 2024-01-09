import "./styles.scss";
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
  { id: 1, name: '[TT05] Thiền toạ cơ bản cho người mới bắt đầu', teacher: 'Dang Tri'},
  { id: 2, name: '[TT05] Thiền toạ cơ bản cho người mới bắt đầu', teacher: 'Dang Tri'},
  { id: 3, name: '[TT05] Thiền toạ cơ bản cho người mới bắt đầu', teacher: 'Dang Tri'},
]
const Topic = () => {

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
        <div className="grey-line"></div>
        <div className="first-topic-row">
          <div className="my-course-txt">Mức độ sơ cấp</div>
          <img className="course-icon-next" src="/arrow-right.svg" alt="image" />
        </div>
        <div className="list-first-course-layout">
          {freeLesson.map((item) => {
            return <div className="first-course-item">
              <img className="first-course-item-img" src="/size-event.svg" alt="image" />
              <div className="first-course-name">{item.name}</div>
              <div className="first-course-teacher">{item.teacher}</div>
            </div>
          })}
        </div>
        <div className="grey-line"></div>
        <div className="first-topic-row">
          <div className="my-course-txt">Mức độ trung cấp</div>
          <img className="course-icon-next" src="/arrow-right.svg" alt="image" />
        </div>
        <div className="list-first-course-layout">
          {freeLesson.map((item) => {
            return <div className="first-course-item">
              <img className="first-course-item-img" src="/size-event.svg" alt="image" />
              <div className="first-course-name">{item.name}</div>
              <div className="first-course-teacher">{item.teacher}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};
export default Topic;

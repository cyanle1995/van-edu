import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const history = useHistory();
  const { courses, books } = useSelector((state) => state.HomeReducer);

  const categoriesData = [
    {
      key: 1,
      title: "Đọc sách",
      describe: `${books.length} đầu sách`,
      icon: "/read-book.svg",
    },
    { key: 2, title: "Đánh thức bản thân", describe: "", icon: "/travel.svg" },
    {
      key: 3,
      title: "Khoá học",
      describe: `${courses.length} sắp diễn ra`,
      icon: "/online-learning.svg",
    },
    {
      key: 4,
      title: "Chuyên gia tư vấn",
      describe: "",
      icon: "/study-anywhere.svg",
    },
  ];
  const onClick = (key) => {
    if (key === 1) {
      history.push("/book");
    } else if (key === 3) {
      history.push("/course");
    }
  };
  return (
    <div className="categories-container">
      {categoriesData.map((item, index) => (
        <div
          className="categories-item"
          key={index}
          onClick={() => onClick(item.key)}
        >
          <div className="item-container">
            <div className="title">{item.title}</div>
            <div className="describe">{item.describe}</div>
          </div>
          <img src={item.icon} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default Categories;

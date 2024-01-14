import { useSelector } from "react-redux";

const Categories = () => {
  const { courses, books } = useSelector((state) => state.HomeReducer);

  const categoriesData = [
    { title: "Đọc sách", describe:`${books.length} đầu sách`, icon: "/read-book.svg" },
    {
      title: "Đánh thức bản thân",
      describe: "",
      icon: "/travel.svg",
    },
    {
      title: "Khoá học",
      describe: `${courses.length} sắp diễn ra`,
      icon: "/online-learning.svg",
    },
    { title: "Chuyên gia tư vấn", describe: "", icon: "/study-anywhere.svg" },
  ];

  return (
    <div className="categories-container">
      {categoriesData.map((item, index) => (
        <div className="categories-item" key={index}>
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

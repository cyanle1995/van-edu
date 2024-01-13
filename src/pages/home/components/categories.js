const categoriesData = [
  { title: "Đọc sách", describe: "200+ đầu sách", icon: "/read-book.svg" },
  { title: "Đánh thức bản thân", describe: "Thần số học", icon: "/travel.svg" },
  { title: "Khoá học", describe: "+5 sắp diễn ra", icon: "/online-learning.svg" },
  { title: "Chuyên gia tư vấn", describe: "", icon: "/study-anywhere.svg" },
];

const Categories = () => {
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

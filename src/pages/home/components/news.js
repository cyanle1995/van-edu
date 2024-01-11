import "../styles.scss";

const blogList = [
  {
    name: "Thầy Minh Niệm có mặt tại giảng đường N1 để thuyết trình",
    time: "12/09/2023",
    readTime: 1,
    cover: "/blog-cover.png",
  },
  {
    name: "Thầy Minh Niệm có mặt tại giảng đường N1 để thuyết trình",
    time: "12/09/2023",
    readTime: 1,
    cover: "/blog-cover.png",
  },
  {
    name: "Thầy Minh Niệm có mặt tại giảng đường N1 để thuyết trình",
    time: "12/09/2023",
    readTime: 1,
    cover: "/blog-cover.png",
  },
];

const News = () => {
  return (
    <div className="list-container">
      <div className="heading">
        <div className="text">Blog tin tức</div>
        <img class="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="blog-list">
        {blogList.map((item, index) => {
          return (
            <div className="blog" key={index}>
              <img className="cover" src={item.cover} alt="image" />

              <div className="content-blog">
                <div className="description">{item.name}</div>
                <div className="date-timeread-content">
                  <div className="date-blog">{item.time}</div>
                  <div className="timeread-blog">
                    {item.readTime} {" "}phút đọc
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;

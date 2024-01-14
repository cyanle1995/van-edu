import { apiGetBlogs } from "helpers/api/course";
import "../styles.scss";
import { useEffect, useState } from "react";
import moment from "moment";

const News = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    apiGetBlogs()
      .then((res) => {
        if (res.data?.length > 0) {
          setBlogs(res.data);
        }
      })
      .catch((error) => {
        setBlogs([]);
      });
  }, []);
  
  return (
    <div className="list-container">
      <div className="heading">
        <div className="text">Blog tin tức</div>
        <img className="icon" src="/arrow-right.svg" alt="image" />
      </div>

      <div className="blog-list">
        {blogs.map((item, index) => {
          return (
            <div className="blog" key={index}>
              <img className="cover" src="/blog-cover.png" alt="image" />

              <div className="content-blog">
                <div className="description">{item?.attributes?.title}</div>
                <div className="date-timeread-content">
                  <div className="date-blog">
                    {moment(item?.attributes?.publishedAt).format("DD/MM/YYY")}
                  </div>
                  <div className="timeread-blog">
                    {item?.attributes?.time_reading}
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

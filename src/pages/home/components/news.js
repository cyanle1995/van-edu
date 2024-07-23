import { apiGetBlogs } from "helpers/api/course";
import "../styles.scss";
import { useEffect, useState } from "react";
import moment from "moment";
import { getImageURL } from "utils/Utils";

const News = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    apiGetBlogs()
      .then((res) => {
        console.log('blogs', res);
        if (res?.length > 0) {
          setBlogs(res);
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
              {item?.thumb ? <img className="cover" src={getImageURL(item?.thumb)} alt="image" />: <img className="cover" src="/blog-cover.png" alt="image" />}
              <div className="content-blog">
                <div className="description">{item?.title}</div>
                <div className="date-timeread-content">
                  <div className="date-blog">
                    {moment(item?.date_created).format("DD/MM/YYY")}
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

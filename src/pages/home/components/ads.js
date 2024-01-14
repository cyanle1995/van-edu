import {  useSelector } from "react-redux";
import "../styles.scss";
import Button from "components/button/Button";
import { useEffect, useState } from "react";

const Ads = () => {
  const { courses } = useSelector((state) => state.HomeReducer);
  const [courseList, setCourseList] = useState([]);

  useEffect(()=> {
    if(courses && courses.length) {
      const courselist = courses.map((item)=> {
        return {
          id: item.id,
          title: item.attributes.title,
          description: item.attributes.description,
        }
      });

      setCourseList(courselist);
    }
  }, [courses]);

  return (
    <div className="ads-container">
      {courseList.map((item) => {
        return (
          <div className="ads-item" key={item.id}>
            <div className="ads-item-left">
              <div className="text-group">
                <div className="title">{item.title}</div>
                <div className="detail">{item.description}</div>
              </div>

              <Button
                className="ads-item-left-btn"
                text="Học ngay"
                background="#6059e3"
                width="113px"
              />
            </div>

            <div className="ads-item-right">
              <img
                className="ads-item-right-icon"
                src="/home-ads.svg"
                alt="image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ads;

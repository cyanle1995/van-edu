import { listFreeCourse } from "helpers/api/course";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getImageURL } from "utils/Utils";
import "./styles.scss";

const ListFreeCourse = () => {
  let { courseId } = useParams();
  let dispatch = useDispatch();
  const history = useHistory();
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    listFreeCourse()
      .then((res) => {
        setListCourse(res);
      })
      .catch(() => {
        setListCourse([]);
      });
  }, []);
  const onDetailCourse = (id) => {
    history.push(`/free-course/${id}`);
  };
  const onGoToLesson = (id) => {
    history.push(`/course/${courseId}/lesson/${id}`);
  };
  const onGoBack = () => {
    history.goBack();
  };
  const onSelectTopic = (id) => {
    history.push(`/course/${id}`);
  };
  const getFullName = (firstname, lastname) => {
    return firstname + " " + lastname;
  };
  return (
    <div className="topic-container">
      <div className="app-header">
        <img
          className="app-header-back"
          src="/arrow-left.svg"
          alt="image"
          onClick={onGoBack}
        />
        <div className="app-header-text">Bài giảng miễn phí</div>
        <img className="app-header-back" src="/search.svg" alt="image" />
      </div>
      <div className="free-layout">
        {listCourse &&
          listCourse.map((les) => {
            return (
              <div
                className="free-course-item"
                onClick={() => onDetailCourse(les.id)}
              >
                <img
                  className="free-course-item-img"
                  src={getImageURL(les?.thumb)}
                  alt="image"
                />
                <div className="free-course-name">{les?.name}</div>
                <div className="first-course-teacher">
                  {getFullName(
                    les?.user_created?.first_name,
                    les?.user_created?.last_name
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ListFreeCourse;

import { get } from "../api_helper";
import * as url from "../url_helper";

// export const postLogin = (payload) =>
//   get(url.API_LIST_TOPIC, {
//     params: {
//       userId: payload.userId,
//     },
//   });

export const apiGetListTopic = () =>
    get(url.API_LIST_TOPIC);
export const apiGetListCourseByTopic = (id) =>
    get(url.API_LIST_COURSE_BY_TOPIC + id);
export const apiGetListLessonByCourse = (id) =>
    get(url.API_LIST_LESSON_BY_COURSE + id);

export const apiGetCourseDetail = (id) =>
    get(`courses/${id}?populate=thumb`);
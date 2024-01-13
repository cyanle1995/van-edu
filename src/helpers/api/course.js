import { get, post } from "../api_helper";
import * as url from "../url_helper";

// export const postLogin = (payload) =>
//   get(url.API_LIST_TOPIC, {
//     params: {
//       userId: payload.userId,
//     },
//   });

export const apiSocialLogin = (params) =>
    get(url.API_SOCIAL_LOGIN, { params });
export const apiGetListTopic = () =>
    get(url.API_LIST_TOPIC);
export const apiGetListCourseByTopic = (id) =>
    get(url.API_LIST_COURSE_BY_TOPIC + id);
export const apiGetListLessonByCourse = (id) =>
    get(url.API_LIST_LESSON_BY_COURSE + id);

export const apiGetCourseDetail = (id) =>
    get(`courses/${id}?populate=thumb`);
export const apiPostComment = (courseId, data) =>
    post(`comments/api::course.course:${courseId}`, data);

export const apiGetComments = (courseId) =>
    get(`comments/api::course.course:${courseId}/flat?populate[author][populate][0]=avatar&pagination[page]=1&pagination[pageSize]=100`);
export const apiGetExams = (courseId) =>
    get(`examination-questions?populate=*&filters[courses]=${courseId}`);
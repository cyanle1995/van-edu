import { get, post } from "../api_helper";
import * as url from "../url_helper";

export const apiSocialLogin = (params) =>
    get(url.API_SOCIAL_LOGIN, { params });
export const apiGetCourses = () => get("courses");
export const apiGetBooks = () => get("books");
export const apiGetQuestionAndAnswers = () => get("question-and-answers");
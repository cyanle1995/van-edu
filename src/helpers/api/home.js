import { readItems } from "@directus/sdk";
import { DirectUsClient, get, post } from "../api_helper";
import * as url from "../url_helper";

export const apiSocialLogin = (params) => get(url.API_SOCIAL_LOGIN, { params });
export const apiGetCourses = () => get("courses");
export const apiGetBooks = async () => {
  try {
    const res = await DirectUsClient.request(readItems("books"));
    return res;
  } catch (error) {
    return [];
  }
};
export const apiGetMyBooks = async () => {
  try {
    const res = await this.axios.get('books?populate[thumb]=1');
    return res.data;
  } catch (error) {
    return [];
  }
};
const listBookCategory = async () => {
  const res = await DirectUsClient.request(
    readItems('book_category', {fields: ['*']})
  )
  return res
}
export const listAllEvents = async (config)=> {
  try {
    const res = await DirectUsClient.request(
      readItems('events', {
        filter: {
          ...config.filter,
        },
      })
    )
    return res
  } catch (error) {
    return []
  }
}
export const apiGetQuestionAndAnswers = () => get("question-and-answers");

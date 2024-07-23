import axios from "axios";
import { DirectUsClient, get, post } from "../api_helper";
import * as url from "../url_helper";
import {
  aggregate,
  createComment,
  createItem,
  readActivities,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
// export const postLogin = (payload) =>
//   get(url.API_LIST_TOPIC, {
//     params: {
//       userId: payload.userId,
//     },
//   });
const PREFIX = "";
const URI = {
  events: `${PREFIX}/events?fields[0]=title&fields[1]=description&populate[event_likes][count]=1&populate[event_shares][count]=1&populate[event_comments][count]=1&populate[thumb]=1`,
  allEvents: `${PREFIX}/events?populate[event_likes][count]=1&populate[event_shares][count]=1&populate[event_comments][count]=1&populate[thumb]=1`,
  eventDetail: `${PREFIX}/events/`,
};
export const apiSocialLogin = (params) => get(url.API_SOCIAL_LOGIN, { params });

export const apiGetListTopic = async () => {
  const res = await DirectUsClient.request(
    readItems("categories", { fields: ["*"] })
  );
  return res;
};
export const apiGetListCourseByTopic = async (topicId) => {
  const res = await DirectUsClient.request(
    readItems("courses", {
      fields: ["*"],
      filter: {
        category: topicId,
      },
    })
  );
  return res;
};
export const apiGetListLessonByCourse = async (courseId) => {
  const res = await DirectUsClient.request(
    readItems("lessons", {
      fields: ["*"],
      filter: {
        course: courseId,
      },
    })
  );
  return res;
};

export const apiGetCourseDetail = async (courseId) => {
  const res = await DirectUsClient.request(
    readItems("courses", {
      fields: [
        "*",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
      ],
      filter: {
        id: courseId,
      },
    })
  );
  return res;
};
export const apiPostComment = async (course, comment) => {
  const res = await DirectUsClient.request(
    createComment({
      collection: "courses",
      item: course.toString(),
      comment,
    })
  );
  return res;
};
export const apiGetComments = async (courseId, page) => {
  const res = await DirectUsClient.request(
    readActivities({
      fields: [
        "*",
        "user.first_name",
        "user.last_name",
        "user.avatar",
        "user.birth_date",
      ],
      filter: {
        collection: "courses",
        action: "comment",
        item: courseId.toString(),
      },
      page,
      limit: 999,
      sort: ["-timestamp"],
    })
  );
  return res;
};
export const totalCourseComments = async (courseId) => {
  try {
  } catch (error) {}
  const res = await DirectUsClient.request(
    readActivities({
      fields: ["*"],
      filter: {
        collection: "courses",
        action: "comment",
        item: courseId.toString(),
      },
      aggregate: { count: "*" },
    })
  );
  return res;
};
export const lessonPlaying = async (lessonId, userId) => {
  return await DirectUsClient.request(
    readItems("user_lesson", {
      fields: ["*"],
      filter: {
        lessons: lessonId,
        user: userId,
      },
    })
  );
};
export const lessonPlayingByUser = async (userId) => {
  return await DirectUsClient.request(
    readItems("user_lesson", {
      fields: ["*", "lessons.id", "lessons.course.*"],
      filter: {
        user: userId,
      },
    })
  );
};
export const listMyCourse = async (userId) => {
  return await DirectUsClient.request(
    readItems("user_course", {
      fields: [
        "*",
        "course.*",
        "lesson_progress.status",
        "course.category.name",
      ],
      filter: {
        user: userId,
      },
    })
  );
};
export const addUserCourse = async (courseId, userId) => {
  return await DirectUsClient.request(
    createItem("user_course", {
      course: courseId,
      user: userId,
    })
  );
};

export const addLessonPlaying = async (
  lessonId,
  duration,
  status,
  userId,
  userCourse
) => {
  return await DirectUsClient.request(
    createItem("user_lesson", {
      lessons: lessonId,
      duration,
      status,
      user: userId,
      user_course: userCourse,
    })
  );
};

export const editLessonPlaying = async (itemId, data) => {
  return await DirectUsClient.request(updateItem("user_lesson", itemId, data));
};
export const listHomeCourses = async () => {
  try {
    const res = await DirectUsClient.request(
      aggregate("courses", {
        aggregate: { count: ["*"] },
      })
    );
    return res;
  } catch (err) {
    return [];
  }
};
export const listFreeCourse = async (page = 0, sort = "-date_created") => {
  const res = await DirectUsClient.request(
    readItems("courses", {
      fields: [
        "*",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
      ],
      filter: {
        is_free: true,
      },
      page,
      limit: 9999,
      sort: ["sort", sort],
    })
  );
  return res;
};

export const apiGetExams = async (examId) => {
  const res = await DirectUsClient.request(
    readItem("examinations", examId, {
      fields: ["*", "questions.*"],
    })
  );
  return res;
};
export const apiPostOrders = (data) => post(`orders`, data);

export const apiGetListHomeEvent = async (config) => {
  try {
    const res = await DirectUsClient.request(
      readItems("events", { filter: { ...config.filter } })
    );
    return res;
  } catch (error) {
    return [];
  }
};
export const apiGetBlogs = async (config) => {
  try {
    const res = await DirectUsClient.request(readItems("news"));
    return res;
  } catch (error) {
    return [];
  }
};
export const listBookCategory = async () => {
  const res = await DirectUsClient.request(
    readItems("book_category", { fields: ["*"] })
  );
  return res;
};
export const listFreeBook = async (page = 0, sort = "-date_created") => {
  const res = await DirectUsClient.request(
    readItems("books", {
      fields: [
        "*",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
      ],
      filter: {
        is_free: true,
      },
      page,
      limit: 20,
      sort: ["sort", sort],
    })
  );
  return res;
};
export const listPremiumBook = async (
  page = 0,
  sort = '-date_created'
)=> {
  const res = await DirectUsClient.request(
    readItems('books', {
      fields: [
        '*',
        'user_created.first_name',
        'user_created.last_name',
        'user_created.avatar',
      ],
      filter: {
        is_free: false,
      },
      page,
      limit: 20,
      sort: ['sort', sort],
    })
  )
  return res
}
export const apiGetBookDetail = async (bookId) => {
  const res = await DirectUsClient.request(
    readItem('books', bookId, {
      fields: [
        '*',
        'user_created.first_name',
        'user_created.last_name',
        'user_created.avatar',
      ],
    })
  )
  return res
}
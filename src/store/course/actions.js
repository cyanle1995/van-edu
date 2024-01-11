import {
  GET_LIST_TOPIC,
  GET_LIST_TOPIC_SUCCESS,
  GET_LIST_TOPIC_FAIL,
  CLEAR_ERROR_MESSAGE,
  GET_LIST_COURSE_BY_TOPIC,
  GET_LIST_COURSE_BY_TOPIC_SUCCESS,
  GET_LIST_COURSE_BY_TOPIC_FAIL,
  GET_LIST_LESSION_BY_COURSE,
  GET_LIST_LESSION_BY_COURSE_SUCCESS,
  GET_LIST_LESSION_BY_COURSE_FAIL,
  GET_COURSE_DETAIL,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAIL,
} from "./actionTypes";

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};

export const getListTopic = (payload) => {
  return {
    type: GET_LIST_TOPIC,
    payload: payload,
  };
};
export const getListTopicSuccess = (payload) => {
  return {
    type: GET_LIST_TOPIC_SUCCESS,
    payload: payload,
  };
};
export const getListTopicFail = (payload) => {
  return {
    type: GET_LIST_TOPIC_FAIL,
    payload: payload,
  };
};

export const getListCourseByTopic = (payload) => {
  return {
    type: GET_LIST_COURSE_BY_TOPIC,
    payload: payload,
  };
};
export const getListCourseByTopicSuccess = (payload) => {
  return {
    type: GET_LIST_COURSE_BY_TOPIC_SUCCESS,
    payload: payload,
  };
};
export const getListCourseByTopicFail = (payload) => {
  return {
    type: GET_LIST_COURSE_BY_TOPIC_FAIL,
    payload: payload,
  };
};

export const getListLessonByCourse = (payload) => {
  return {
    type: GET_LIST_LESSION_BY_COURSE,
    payload: payload,
  };
};
export const getListLessonByCourseSuccess = (payload) => {
  return {
    type: GET_LIST_LESSION_BY_COURSE_SUCCESS,
    payload: payload,
  };
};
export const getListLessonByCourseFail = (payload) => {
  return {
    type: GET_LIST_LESSION_BY_COURSE_FAIL,
    payload: payload,
  };
};

export const getCourseDetail = (payload) => {
  return {
    type: GET_COURSE_DETAIL,
    payload: payload,
  };
};
export const getCourseDetailSuccess = (payload) => {
  return {
    type: GET_COURSE_DETAIL_SUCCESS,
    payload: payload,
  };
};
export const getCourseDetailFail = (payload) => {
  return {
    type: GET_COURSE_DETAIL_FAIL,
    payload: payload,
  };
};

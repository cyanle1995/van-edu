import {
  CLEAR_ERROR_MESSAGE,
  GET_COURSES,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAIL,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  GET_QUESTIONS_ANSWER,
  GET_QUESTIONS_ANSWER_SUCCESS,
  GET_QUESTIONS_ANSWER_FAIL
} from "./actionTypes";

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};

//courese
export const getCourses = (payload) => {
  return { 
    type: GET_COURSES,
    payload: payload,
   };
};
export const getCoursesSuccess = (payload) => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: payload,
  };
};
export const getCoursesFail = (payload) => {
  return {
    type: GET_COURSES_FAIL,
    payload: payload,
  };
};

//books
export const getBooks = (payload) => {
  return { 
    type: GET_BOOKS,
    payload: payload,
   };
};
export const getBooksSuccess = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: payload,
  };
};
export const getBooksFail = (payload) => {
  return {
    type: GET_BOOKS_FAIL,
    payload: payload,
  };
};

//questions
export const getQuestions = (payload) => {
  return { 
    type: GET_QUESTIONS_ANSWER,
    payload: payload,
   };
};
export const getQuestionsSuccess = (payload) => {
  return {
    type: GET_QUESTIONS_ANSWER_SUCCESS,
    payload: payload,
  };
};
export const getQuestionsFail = (payload) => {
  return {
    type: GET_QUESTIONS_ANSWER_FAIL,
    payload: payload,
  };
};
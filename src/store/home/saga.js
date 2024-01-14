import { takeLatest, put, call } from "redux-saga/effects";
import { GET_BOOKS, GET_COURSES, GET_QUESTIONS_ANSWER } from "./actionTypes";
import { apiGetCourses, apiGetBooks, apiGetQuestionAndAnswers } from "helpers/api/home";
import { getBooksFail, getBooksSuccess, getCoursesFail, getCoursesSuccess, getQuestionsFail, getQuestionsSuccess } from "./actions";


function* onGetCourses() {
  try {
    const response = yield call(apiGetCourses);
    if (response?.data) {
      yield put(getCoursesSuccess(response?.data || []));
    } else {
      yield put(getCoursesFail("apiGetCourses failed"));
    }
  } catch (error) {
    yield put(getCoursesFail(error.response));
  }
}

function* onGetBooks() {
  try {
    const response = yield call(apiGetBooks);
    if (response?.results) {
      yield put(getBooksSuccess(response?.results || []));
    } else {
      yield put(getBooksFail("apiGetBooks failed"));
    }
  } catch (error) {
    yield put(getBooksSuccess(error.response));
  }
}

function* onGetQuestions() {
  try {
    const response = yield call(apiGetQuestionAndAnswers);
    if (response?.data) {
      yield put(getQuestionsSuccess(response?.data || []));
    } else {
      yield put(getQuestionsFail("apiGetQuestions failed"));
    }
  } catch (error) {
    yield put(getQuestionsSuccess(error.response));
  }
}

function* UserSaga() {
  yield takeLatest(GET_COURSES, onGetCourses);
  yield takeLatest(GET_BOOKS, onGetBooks);
  yield takeLatest(GET_QUESTIONS_ANSWER, onGetQuestions);
}

export default UserSaga;

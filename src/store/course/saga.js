import { takeLatest, put, call } from "redux-saga/effects";
import { GET_COURSE_DETAIL, GET_LIST_COURSE_BY_TOPIC, GET_LIST_LESSION_BY_COURSE, GET_LIST_TOPIC } from "./actionTypes";
import { apiGetCourseDetail, apiGetListCourseByTopic, apiGetListLessonByCourse, apiGetListTopic } from "helpers/api/course";
import { getCourseDetailFail, getCourseDetailSuccess, getListCourseByTopicFail, getListCourseByTopicSuccess, getListLessonByCourseFail, getListLessonByCourseSuccess, getListTopicFail, getListTopicSuccess } from "./actions";


function* onGetListTopic() {
  try {
    const response = yield call(apiGetListTopic);
    if (response?.data) {
      yield put(getListTopicSuccess(response?.data || []));
    } else {
      yield put(getListTopicFail("apiGetListTopic failed"));
    }
  } catch (error) {
    yield put(getListTopicFail(error.response));
  }
}
function* onGetListCourseByTopic(payload) {
  try {
    const response = yield call(apiGetListCourseByTopic, payload.payload);
    if (response?.data) {
      yield put(getListCourseByTopicSuccess(response?.data || []));
    } else {
      yield put(getListCourseByTopicFail("apiGetListCourseByTopic failed"));
    }
  } catch (error) {
    yield put(getListCourseByTopicFail(error.response));
  }
}
function* onGetListLessonByCourse(payload) {
  try {
    const response = yield call(apiGetListLessonByCourse, payload.payload);
    if (response?.data) {
      yield put(getListLessonByCourseSuccess(response?.data || []));
    } else {
      yield put(getListLessonByCourseFail("apiGetListCourseByTopic failed"));
    }
  } catch (error) {
    yield put(getListLessonByCourseFail(error.response));
  }
}
function* onGetCourseDetail(payload) {
  try {
    console.log('payload===', payload);
    const response = yield call(apiGetCourseDetail, payload.payload);
    console.log('responsexxx', response);
    if (response) {
      yield put(getCourseDetailSuccess(response || {}));
    } else {
      yield put(getCourseDetailFail("apiGetCourseDetail failed"));
    }
  } catch (error) {
    yield put(getCourseDetailFail(error.response));
  }
}
function* UserSaga() {
  yield takeLatest(GET_LIST_TOPIC, onGetListTopic);
  yield takeLatest(GET_LIST_COURSE_BY_TOPIC, onGetListCourseByTopic);
  yield takeLatest(GET_LIST_LESSION_BY_COURSE, onGetListLessonByCourse);
  yield takeLatest(GET_COURSE_DETAIL, onGetCourseDetail);
}

export default UserSaga;

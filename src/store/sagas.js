import { all, fork } from "redux-saga/effects";

import CourseSaga from "./course/saga";

export default function* rootSaga() {
  yield all([fork(CourseSaga)]);
}

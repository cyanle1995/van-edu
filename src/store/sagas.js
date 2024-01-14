import { all, fork } from "redux-saga/effects";

import CourseSaga from "./course/saga";
import HomeSaga from "./home/saga";

export default function* rootSaga() {
  yield all([fork(CourseSaga), fork(HomeSaga)]);
}

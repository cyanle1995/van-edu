import { all, fork } from "redux-saga/effects";

import PatientSaga from "./patients/saga";
import DeviceSaga from "./devices/saga";
import UserSaga from "./user/saga";

export default function* rootSaga() {
  yield all([fork(PatientSaga)]);
  yield all([fork(DeviceSaga)]);
  yield all([fork(UserSaga)]);
}

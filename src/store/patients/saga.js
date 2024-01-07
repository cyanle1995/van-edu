import { takeLatest, put, call } from "redux-saga/effects";

import { GET_PATIENTS } from "./actionTypes";
import { getPatientsSuccess, getPatientsFail } from "./actions";

import { getPatients } from "../../helpers/backend_helper";

function* onGetPatients() {
  try {
    const response = yield call(getPatients);
    console.log("patients response:", response);
    yield put(getPatientsSuccess(response));
  } catch (error) {
    yield put(getPatientsFail(error.response));
  }
}

function* PatientSaga() {
  yield takeLatest(GET_PATIENTS, onGetPatients);
}

export default PatientSaga;

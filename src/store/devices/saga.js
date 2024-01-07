import { takeLatest, put, call } from "redux-saga/effects";

import { GET_DEVICES } from "./actionTypes";
import { getDevicesSuccess, getDevicesFail } from "./actions";

import { getDevices } from "../../helpers/backend_helper";

function* onGetDevices() {
  try {
    const response = yield call(getDevices);
    console.log("Devices response:", response);
    yield put(getDevicesSuccess(response));
  } catch (error) {
    yield put(getDevicesFail(error.response));
  }
}

function* DeviceSaga() {
  yield takeLatest(GET_DEVICES, onGetDevices);
}

export default DeviceSaga;

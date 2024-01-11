import { takeLatest, put, call } from "redux-saga/effects";

import { USER_LOGIN } from "./actionTypes";
import { loginSuccess, loginFail } from "./actions";

import { postLogin } from "../../helpers/backend_helper";

function* onLogin({ payload }) {
  try {
    const response = yield call(postLogin, payload);
    if (response?.length) {
      yield put(loginSuccess(response[0]));
    } else {
      yield put(loginFail("Login failed"));
    }
  } catch (error) {
    yield put(loginFail(error.response));
  }
}

function* UserSaga() {
  yield takeLatest(USER_LOGIN, onLogin);
}

export default UserSaga;

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_ERROR_MESSAGE,
} from "./actionTypes";

export const login = (payload) => {
  return {
    type: USER_LOGIN,
    payload: payload,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: payload,
  };
};
export const loginFail = (payload) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: payload,
  };
};
export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};

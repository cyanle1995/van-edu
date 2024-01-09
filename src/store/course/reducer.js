import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_ERROR_MESSAGE,
} from "./actionTypes";

const initialState = {
  loginInfo: {},
  loading: false,
  error: {
    message: "",
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      state = { ...state, loading: true };
      break;
    case USER_LOGIN_SUCCESS:
      state = {
        ...state,
        loginInfo: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case USER_LOGIN_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
        },
        loginInfo: {},
        loading: false,
      };
      break;
    case CLEAR_ERROR_MESSAGE:
      state = {
        ...state,
        loading: false,
        error: { message: "" },
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UserReducer;

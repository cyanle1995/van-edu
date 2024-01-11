import {
  GET_LIST_TOPIC,
  GET_LIST_TOPIC_SUCCESS,
  GET_LIST_TOPIC_FAIL,
  CLEAR_ERROR_MESSAGE,
  GET_LIST_COURSE_BY_TOPIC_SUCCESS,
  GET_LIST_COURSE_BY_TOPIC_FAIL,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAIL
} from "./actionTypes";

const initialState = {
  topics: [],
  courses: [],
  courseDetail: {},
  loading: false,
  error: {
    message: "",
  },
};

const CourseReducer = (state = initialState, action) => {
  console.log('actionaaa', action);
  switch (action.type) {
    case GET_LIST_TOPIC:
      state = { ...state, loading: true };
      break;
    case GET_LIST_TOPIC_SUCCESS:
      state = {
        ...state,
        topics: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case GET_LIST_TOPIC_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
        },
        topics: [],
        loading: false,
      };
      break;
    case GET_LIST_COURSE_BY_TOPIC_SUCCESS:
      state = {
        ...state,
        courses: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case GET_LIST_COURSE_BY_TOPIC_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
        },
        courses: [],
        loading: false,
      };
      break;
    case GET_COURSE_DETAIL_SUCCESS:
      state = {
        ...state,
        courseDetail: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case GET_COURSE_DETAIL_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
        },
        courseDetail: {},
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

export default CourseReducer;

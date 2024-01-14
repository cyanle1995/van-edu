import {
  GET_COURSES,
  GET_COURSES_FAIL,
  GET_COURSES_SUCCESS,
  CLEAR_ERROR_MESSAGE,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  GET_QUESTIONS_ANSWER,
  GET_QUESTIONS_ANSWER_SUCCESS,
  GET_QUESTIONS_ANSWER_FAIL,
} from "./actionTypes";

const initialState = {
  courses: [],
  books: [],
  questions: [],
  loading: false,
  error: {
    message: "",
  },
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    //courses
    case GET_COURSES:
      state = { ...state, loading: true };
      break;
    case GET_COURSES_SUCCESS:
      state = {
        ...state,
        courses: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case GET_COURSES_FAIL:
      state = {
        ...state,
        courses: [],
        loading: false,
        error: { message: action.payload },
      };
      break;

    //books
    case GET_BOOKS:
      state = { ...state, loading: true };
      break;
    case GET_BOOKS_SUCCESS:
      state = {
        ...state,
        books: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case GET_BOOKS_FAIL:
      state = {
        ...state,
        books: [],
        loading: false,
        error: { message: action.payload },
      };
      break;

    //questions
    case GET_QUESTIONS_ANSWER:
      state = { ...state, loading: true };
      break;
    case GET_QUESTIONS_ANSWER_SUCCESS:
      state = {
        ...state,
        questions: action.payload,
        loading: false,
        error: { message: "" },
      };
      break;
    case GET_QUESTIONS_ANSWER_FAIL:
      state = {
        ...state,
        questions: [],
        loading: false,
        error: { message: action.payload },
      };
      break;

    //clear error msg
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

export default HomeReducer;

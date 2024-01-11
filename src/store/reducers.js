import { combineReducers } from "redux";
import LoadingReducer from "./loading/reducer";
import CourseReducer from "./course/reducer";

const rootReducer = combineReducers({
  LoadingReducer,
  CourseReducer
});

export default rootReducer;

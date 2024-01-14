import { combineReducers } from "redux";
import LoadingReducer from "./loading/reducer";
import CourseReducer from "./course/reducer";
import HomeReducer from "./home/reducer";

const rootReducer = combineReducers({
  LoadingReducer,
  CourseReducer,
  HomeReducer
});

export default rootReducer;

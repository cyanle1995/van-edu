import { combineReducers } from "redux";
import LoadingReducer from "./loading/reducer";
import UserReducer from "./user/reducer";

const rootReducer = combineReducers({
  LoadingReducer,
  UserReducer,
});

export default rootReducer;

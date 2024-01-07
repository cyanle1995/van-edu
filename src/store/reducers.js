import { combineReducers } from "redux";
import PatientReducer from "./patients/reducer";
import DeviceReducer from "./devices/reducer";
import LoadingReducer from "./loading/reducer";
import UserReducer from "./user/reducer";

const rootReducer = combineReducers({
  PatientReducer,
  DeviceReducer,
  LoadingReducer,
  UserReducer,
});

export default rootReducer;

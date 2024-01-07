import {
  GET_DEVICES,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
} from "./actionTypes";

const initialState = {
  devices: [],
  loadingDevices: false,
  error: {
    message: "",
  },
};

const DevicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICES:
      state = { ...state, loadingDevices: true };
      break;
    case GET_DEVICES_SUCCESS:
      state = { ...state, devices: action.payload, loadingDevices: false };
      break;
    case GET_DEVICES_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingDevices: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default DevicesReducer;

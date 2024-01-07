import {
  GET_DEVICES,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
} from "./actionTypes";

export const getDevices = () => {
  return {
    type: GET_DEVICES,
  };
};

export const getDevicesSuccess = (devices) => {
  return {
    type: GET_DEVICES_SUCCESS,
    payload: devices,
  };
};

export const getDevicesFail = (error) => {
  return {
    type: GET_DEVICES_FAIL,
    payload: error,
  };
};

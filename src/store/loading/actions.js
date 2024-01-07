import { UPDATE_LOADING } from "./actionTypes";

export const updateLoading = (payload) => {
  return {
    type: UPDATE_LOADING,
    payload: payload,
  };
};

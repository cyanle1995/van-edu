import { UPDATE_LOADING } from "./actionTypes";

const initialState = {
  loading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      state = { ...state, loading: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default LoadingReducer;

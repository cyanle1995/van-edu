import {
  GET_PATIENTS,
  GET_PATIENTS_SUCCESS,
  GET_PATIENTS_FAIL,
} from "./actionTypes";

const initialState = {
  patients: [],
  loadingPatients: false,
  error: {
    message: "",
  },
};

const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS:
      state = { ...state, loadingPatients: true };
      break;
    case GET_PATIENTS_SUCCESS:
      state = { ...state, patients: action.payload, loadingPatients: false };
      break;
    case GET_PATIENTS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPatients: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PatientReducer;

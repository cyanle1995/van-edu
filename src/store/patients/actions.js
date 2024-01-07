import {
  GET_PATIENTS,
  GET_PATIENTS_SUCCESS,
  GET_PATIENTS_FAIL,
} from "./actionTypes";

export const getPatients = () => {
  return {
    type: GET_PATIENTS,
  };
};

export const getPatientsSuccess = (patients) => {
  return {
    type: GET_PATIENTS_SUCCESS,
    payload: patients,
  };
};

export const getPatientsFail = (error) => {
  return {
    type: GET_PATIENTS_FAIL,
    payload: error,
  };
};

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const HomeHook = () => {
  const { patients, loadingPatients } = useSelector(
    (state) => state.PatientReducer
  );
  const { devices } = useSelector((state) => state.DeviceReducer);
  console.log("patientsxxx", patients);
  console.log("devicesxxx", devices);
  const [state, setState] = useState({
    patients: [],
    loadingPatients: false,
    devices: [],
  });
  useEffect(() => {
    setState({
      ...state,
      patients,
    });
  }, [patients]);
  useEffect(() => {
    setState({
      ...state,
      loadingPatients,
    });
  }, [loadingPatients]);

  useEffect(() => {
    setState({
      ...state,
      devices,
    });
  }, [devices]);
  return state;
};
export default HomeHook;

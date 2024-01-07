import { getPatients } from "store/patients/actions";
import { getDevices } from "store/devices/actions";
import { useDispatch } from "react-redux";

const HomeApiHook = () => {
  let dispatch = useDispatch();

  const callGetPatients = () => {
    dispatch(getPatients());
  };
  const callGetDevices = () => {
    dispatch(getDevices());
  };
  return {
    callGetPatients,
    callGetDevices,
  };
};
export default HomeApiHook;

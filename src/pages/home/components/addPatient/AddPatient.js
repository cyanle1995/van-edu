import addPatientIcon from "assets/icons/addPatientIcon.webp";
import "./styles.scss";

const AddPatient = (props) => {
  return (
    <div className="add-patient-container" onClick={props.onClick}>
      <img src={addPatientIcon} className="add-patient-icon" />
    </div>
  );
};
export default AddPatient;

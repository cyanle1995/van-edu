import diaperIconRed from "assets/images/diaper_red.webp";
import diaperIconGreen from "assets/images/diaper_green.webp";
import patientIcon from "assets/images/patient.webp";
import "./styles.scss";
import { Progress } from "antd";

const PatientIem = (props) => {
  const { patient, setShowModalAddPatient } = props;
  const onDetailPatient = () => {
    setShowModalAddPatient(true);
  };
  let patientBg = patient.diaperStatus === 1 ? "#ffdaff" : "#ffdd97";
  let patientBorder =
    patient.diaperStatus === 1 ? "1px solid #ff3131" : "1px solid #fdba2c";

  return (
    <div
      className="patient-item-container"
      onClick={onDetailPatient}
      style={{
        background: patientBg,
        border: patientBorder,
      }}
    >
      <div className="patient-item-row">
        <div className="patient-name">{patient.name}</div>
        <div className="patient-gender">{patient.gender}</div>
      </div>
      <div className="patient-item-row">
        <div className="patient-item-col">
          {" "}
          {patient.diaperStatus === 1 && (
            <img src={diaperIconRed} className="diaper-icon-red" />
          )}
          {patient.diaperStatus === 2 && (
            <img src={diaperIconGreen} className="diaper-icon-red" />
          )}
          <div className="patient-diaperid">{patient.diaperId}</div>
          <div
            className="patient-diaper-size"
            style={{
              background: patient.diaperSize === "M" ? "#f7b52c" : "#7ED957",
            }}
          >
            <div className="patient-diaper-size-text">{patient.diaperSize}</div>
          </div>
          <div className="patient-battery-bar">
            <Progress
              percent={patient.battery_level}
              size={[90, 20]}
              showInfo={false}
              strokeColor="#7ED957"
            />
          </div>
          <div className="patient-battery-label">バッテリー</div>
        </div>
        <div className="patient-item-col">
          <div className="patient-temp">{patient.temp_closthing}℃</div>
          <img src={patientIcon} className="patient-icon" />
          <div className="patient-status">{patient.patientStatus}</div>
          <div className="patient-status-time">{patient.patientStatusTime}</div>
        </div>
      </div>
    </div>
  );
};
export default PatientIem;

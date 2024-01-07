import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeApiHook from "hooks/home/homeApiHook";
import HomeHook from "hooks/home/homeHook";
import "./styles.scss";
import Loading from "components/loading/Loading";
import PatientIem from "./components/patientItem/PatientIem";
import AddPatient from "./components/addPatient/AddPatient";
import Modal from "components/modal/Modal";
import FormPatientDetail from "./components/formPatientDetail/FormPatientDetail";
import Button from "components/button/Button";

const Home = () => {
  const { callGetPatients, callGetDevices } = HomeApiHook();
  const { patients, loadingPatients, devices } = HomeHook();

  const listPatientData = [
    {
      name: "三和 うめ様",
      gender: "女",
      diaperStatus: 1,
      diaperId: "ADC:532",
      diaperSize: "M",
      temp_closthing: 36,
      patientStatus: "無動作",
      patientStatusTime: "3分45秒",
      battery_level: 70,
      diaper: {
        id: "ADC:532",
        size: "M",
        color: "",
        threshold_g: "",
        threshold_yg: "",
        threshold_y: "",
        threshold_o: "",
        threshold_r: "",
      },
    },
    {
      name: "三和 うめ様",
      gender: "男",
      diaperStatus: 1,
      diaperId: "ADC:532",
      diaperSize: "L",
      temp_closthing: 37,
      patientStatus: "無動作",
      patientStatusTime: "3分45秒",
      battery_level: 80,
      diaper: {
        id: "ADC:532",
        size: "L",
        color: "",
        threshold_g: "",
        threshold_yg: "",
        threshold_y: "",
        threshold_o: "",
        threshold_r: "",
      },
    },
    {
      name: "三和 うめ様",
      gender: "女",
      diaperStatus: 1,
      diaperId: "ADC:532",
      diaperSize: "M",
      temp_closthing: 36,
      patientStatus: "無動作",
      patientStatusTime: "3分45秒",
      battery_level: 0,
      diaper: {
        id: "ADC:532",
        size: "M",
        color: "",
        threshold_g: "",
        threshold_yg: "",
        threshold_y: "",
        threshold_o: "",
        threshold_r: "",
      },
    },
    {
      name: "三和 うめ様",
      gender: "男",
      diaperStatus: 2,
      diaperId: "ADC:532",
      diaperSize: "M",
      temp_closthing: 36.5,
      patientStatus: "無動作",
      patientStatusTime: "3分45秒",
      battery_level: 50,
    },
    {
      name: "三和 うめ様",
      gender: "女",
      diaperStatus: 2,
      diaperId: "ADC:532",
      diaperSize: "L",
      temp_closthing: 38,
      patientStatus: "無動作",
      patientStatusTime: "3分45秒",
      battery_level: 20,
    },
    {
      name: "三和 うめ様",
      gender: "女",
      diaperStatus: 2,
      diaperId: "ADC:532",
      diaperSize: "L",
      temp_closthing: 37,
      patientStatus: "無動作",
      patientStatusTime: "3分45秒",
      battery_level: 100,
    },
  ];
  const [showModalAddPatient, setShowModalAddPatient] = useState(false);
  const [listPatient, setListPatient] = useState(false);
  useEffect(() => {
    callGetPatients();
    callGetDevices();
  }, []);
  useEffect(() => {}, [patients, devices]);

  const onAddPatient = () => {
    setShowModalAddPatient(true);
  };
  const onCancelPatientForm = () => {
    setShowModalAddPatient(false);
  };
  return (
    <Container className="home-container">
      <img src="/intro2.svg" alt="image" />
      {loadingPatients ? (
        <Loading />
      ) : (
        <div className="patients-container">
          {listPatientData.map((patient, index) => {
            return (
              <PatientIem
                key={index}
                patient={patient}
                setShowModalAddPatient={setShowModalAddPatient}
              />
            );
          })}
          <AddPatient onClick={onAddPatient} />
        </div>
      )}
      <Modal
        showModal={showModalAddPatient}
        content={
          <FormPatientDetail setShowModalAddPatient={setShowModalAddPatient} />
        }
        onCancel={() => setShowModalAddPatient(false)}
        title="利用者編集"
        width={1000}
        footer={[
          <Button key="back" text="削除" background="#00BF63" />,
          <Button
            key="submit"
            type="primary"
            text="登録"
            background="#FDBA2C"
          />,
          <Button
            key="link"
            type="primary"
            onClick={onCancelPatientForm}
            text="キャンセル"
            background="#A6A6A6"
          />,
        ]}
      />
    </Container>
  );
};
export default Home;

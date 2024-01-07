import { useState } from "react";
import Select from "components/select/Select";
import DatePicker from "components/datepicker/Datepicker";
import Input from "components/input/Input";
import Button from "components/button/Button";
import Modal from "components/modal/Modal";
import "./styles.scss";
import loadingIcon from "assets/icons/loading.gif";
import editIcon from "assets/icons/editIcon.png";
import { CheckOutlined } from "@ant-design/icons";
const genders = [
  { value: 1, label: "男性" },
  { value: 2, label: "女性" },
];

const PatientIem = (props) => {
  const { setShowModalAddPatient } = props;
  const [id, setId] = useState("12345XXX");

  const [showModalSearch, setShowModalSearch] = useState(false);
  const [showModalSearchResult, setShowModalSearchResult] = useState(false);
  const [showModalRegisterSuccess, setShowModalRegisterSuccess] =
    useState(false);
  const [sensorSelected, setSensorSelected] = useState(null);
  const [diseases, setDiseases] = useState([]);
  const [diseaseState, setDiseaseState] = useState(1);
  const [symptoms, setSymptoms] = useState([]);
  const [symptomState, setSymptomState] = useState(1);

  const sensorsResponse = [
    { id: 1, mac: "AC:59:FD:40:1F:A6", status: 1 },
    { id: 2, mac: "BD:A1:36:0F:5Z:B7", status: 2 },
  ];
  const onSearchSensor = () => {
    setShowModalSearch(true);
    setTimeout(() => {
      setShowModalSearch(false);
      setShowModalSearchResult(true);
    }, 3000);
  };
  const onCancelSearch = () => {
    setShowModalSearch(false);
  };
  const onRegisterSensor = () => {
    setShowModalSearchResult(false);
    setShowModalRegisterSuccess(true);
  };
  const modalSearch = () => {
    return (
      <div className="form-patient-detail-loading-sensor">
        <img src={loadingIcon} className="form-patient-detail-loading-icon" />
        <div className="form-patient-detail-loading-message">
          センサー検索中
        </div>

        <Button
          key="back"
          text="キャンセル"
          background="#0E6FBA"
          width={200}
          onClick={onCancelSearch}
        />
      </div>
    );
  };
  const modalSearchResult = () => {
    return (
      <div className="form-patient-detail-search-result">
        <div className="form-patient-detail-search-result-message">
          センサー検索結果
        </div>
        <div className="form-patient-detail-search-result-list">
          {sensorsResponse?.map((sensor) => {
            return (
              <div
                className="form-patient-detail-search-result-item"
                style={{
                  background: sensor.status === 1 ? "#FDBA2C" : "#B4B2B2",
                }}
                onClick={() => setSensorSelected(sensor)}
              >
                <div className="form-patient-detail-search-result-item-text">
                  {sensor.mac}
                </div>
              </div>
            );
          })}
        </div>
        <Button
          key="back"
          text="登録する"
          background="#0E6FBA"
          width={320}
          onClick={onRegisterSensor}
          disabled={!sensorSelected}
        />
      </div>
    );
  };
  const modalRegisterSuccess = () => {
    return (
      <div className="form-patient-detail-search-result">
        <div className="form-patient-detail-search-result-message">
          センサー検索結果
        </div>
        <div className="form-patient-detail-search-result-list">
          <div
            className="form-patient-detail-search-result-item"
            style={{
              background:
                sensorSelected && sensorSelected.status === 1
                  ? "#FDBA2C"
                  : "#B4B2B2",
            }}
          >
            <div className="form-patient-detail-search-result-item-text">
              {sensorSelected && sensorSelected.mac}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const onChangeDisease = (value) => {
    setDiseases(value);
  };
  const onChangeSymptoms = (value) => {
    setSymptoms(value);
  };
  return (
    <div className="form-patient-detail-container">
      <div className="form-patient-detail-rowid">
        <Input
          title="利用者ID（自動生成）"
          width={160}
          titleSize={12}
          value={id}
          onChange={(value) => setId(value)}
        />
      </div>
      <div className="form-patient-detail-row">
        <div className="form-patient-detail-col">
          <Input title="氏名" placeholder="姓" width={100} />
          <Input placeholder="名" width={70} />
        </div>
        <div className="form-patient-detail-col">
          <Select title="性別" options={genders} value={1} />
        </div>
        <div className="form-patient-detail-col">
          <DatePicker title="生年月日" placeholder="YYYY/MM/DD" />
        </div>
        <div className="form-patient-detail-col">
          <Select title="お住まいの地域" value={null} />
        </div>
        <div className="form-patient-detail-col">
          <Select title="グループ" value={null} />
        </div>
      </div>
      <div className="form-patient-detail-row">
        <div className="form-patient-detail-col-merge">
          <div className="form-patient-detail-form-multi">
            <div>病疾患情報</div>
            {diseaseState === 1 ? (
              <div className="row">
                <img
                  src={editIcon}
                  className="form-patient-detail-edit-icon"
                  onClick={() => setDiseaseState(2)}
                />
                <div className="form-patient-detail-list-diseases">
                  {diseases.length === 0
                    ? "未設定"
                    : diseases.map((item) => item + " ")}
                </div>
              </div>
            ) : (
              <div className="row">
                <Select
                  value={diseases}
                  mode="tags"
                  width={370}
                  onChange={onChangeDisease}
                />
                <span className="check-icon" onClick={() => setDiseaseState(1)}>
                  <CheckOutlined />
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="form-patient-detail-col">
          <Select title="要介護度" value={null} />
        </div>
        <div className="form-patient-detail-col">
          <Select title="生活状況" value={null} />
        </div>
      </div>
      <div className="form-patient-detail-row">
        <div className="form-patient-detail-col-merge">
          <div className="form-patient-detail-form-multi">
            <div>気になる症状</div>
            {symptomState === 1 ? (
              <div className="row">
                <img
                  src={editIcon}
                  className="form-patient-detail-edit-icon"
                  onClick={() => setSymptomState(2)}
                />
                <div className="form-patient-detail-list-diseases">
                  {symptoms.length === 0
                    ? "未設定"
                    : symptoms.map((item) => item + " ")}
                </div>
              </div>
            ) : (
              <div className="row">
                <Select
                  value={symptoms}
                  mode="tags"
                  width={370}
                  onChange={onChangeSymptoms}
                />
                <span className="check-icon" onClick={() => setSymptomState(1)}>
                  <CheckOutlined />
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="form-patient-detail-col">
          <Select title="おむつ種類" value={null} />
        </div>
      </div>
      <div className="form-patient-detail-row">
        <div className="form-patient-detail-sensor">センサー選択 :</div>
        <div className="form-patient-detail-sensor-status">済</div>
      </div>
      <div className="form-patient-detail-row-seach">
        <Button
          key="back"
          text="センサー検索"
          background="#0E6FBA"
          className="form-patient-detail-search-button"
          onClick={onSearchSensor}
          width={180}
        />
        <Button
          key="back"
          text="センサー削除"
          background="#FF5757"
          width={180}
        />
      </div>
      <Modal
        showModal={showModalSearch}
        content={modalSearch()}
        onCancel={() => setShowModalSearch(false)}
        title=""
        footer={[]}
        closeIcon={false}
      />
      <Modal
        showModal={showModalSearchResult}
        content={modalSearchResult()}
        onCancel={() => setShowModalSearchResult(false)}
        title=""
        footer={[]}
      />
      <Modal
        showModal={showModalRegisterSuccess}
        content={modalRegisterSuccess()}
        title=""
        footer={[]}
        onCancel={() => {
          setShowModalRegisterSuccess(false);
          setShowModalAddPatient(false);
        }}
      />
    </div>
  );
};
export default PatientIem;

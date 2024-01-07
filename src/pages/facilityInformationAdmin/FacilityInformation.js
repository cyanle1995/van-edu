import Input from "components/input/Input";
import Button from "components/button/Button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import hCuongIcon from "assets/icons/hchuong.png";
import bCauIcon from "assets/icons/bon-cau.png";
import waterIcon from "assets/icons/water.png";
import thuocIcon from "assets/icons/thuoc.jpg";
import "./styles.scss";
import { useState } from "react";

const FacilityInformation = () => {
  const [id, setId] = useState("SANWA_TEST");
  const [name, setName] = useState("ABC苑");
  const [zipCode, setZipCode] = useState("1050004");
  const [address, setAddress] = useState("東京都港区新橋2丁目");
  const [buidingAddress, setBuidingAddress] =
    useState("20-15　新橋駅前ビル1号館808");
  const [phone, setPhone] = useState("0362285382");
  const [email, setEmail] = useState("kaigo-plus@sanwajp-group.com");
  const [numberLicense, setNumberLicense] = useState(30);
  const [remarks, setRemarks] = useState("テスト");
  const [businessId, setBusinessId] = useState("12345");
  const [partner, setPartner] = useState("");

  function renderEventContent(eventContent) {
    if (eventContent?.event?.["_def"]?.extendedProps?.icon?.length === 1) {
      return (
        <div className="calendar-layout">
          <img src={hCuongIcon} style={{ width: 60, height: 60 }} />
        </div>
      );
    } else if (
      eventContent?.event?.["_def"]?.extendedProps?.icon?.length === 2
    ) {
      return (
        <div className="flex-row calendar-layout">
          <img src={hCuongIcon} style={{ width: 60, height: 60 }} />
          <img src={bCauIcon} style={{ width: 60, height: 60 }} />
        </div>
      );
    } else if (
      eventContent?.event?.["_def"]?.extendedProps?.icon?.length === 3
    ) {
      return (
        <div className="flex-row calendar-layout">
          <img src={hCuongIcon} style={{ width: 60, height: 60 }} />
          <div className="flex-col">
            <img src={bCauIcon} style={{ width: 40, height: 40 }} />
            <img src={waterIcon} style={{ width: 40, height: 40 }} />
          </div>
        </div>
      );
    }
    return (
      <div className="calendar-layout">
        <img src={hCuongIcon} className="hchuong-icon" />
        <img src={bCauIcon} className="bcau-icon" />
        <img src={waterIcon} className="bcau-icon" />
        <img src={thuocIcon} className="bcau-icon" />
      </div>
    );
  }
  return (
    <form className="facility-information-admin-container">
      <div className="facility-information-admin-form">
        <div className="facility-information-admin-col">
          <Input
            width={320}
            value={id}
            onChange={(value) => setId(value)}
            placeholder="郵便番号"
            title="施設ID"
            subtitle="（半角英数字NASごとに一意のIDを指定してください）"
          />
          <div className="facility-information-admin-label">
            <Input
              width={200}
              value={name}
              onChange={(value) => setName(value)}
              title="施設名"
            />
          </div>
          <div className="facility-information-admin-label">施設住所</div>
          <div className="facility-information-admin-row">
            <span className="post-code-icon">〒</span>
            <Input
              width={160}
              value={zipCode}
              onChange={(value) => setZipCode(value)}
            />
          </div>
          <Input
            width={320}
            value={address}
            onChange={(value) => setAddress(value)}
          />
          <Input
            width={320}
            value={buidingAddress}
            onChange={(value) => setBuidingAddress(value)}
          />
        </div>
        <div className="facility-information-admin-col">
          <Input
            width={320}
            title="施設代表電話番号"
            value={phone}
            onChange={(value) => setPhone(value)}
          />
          <Input
            width={320}
            title="施設登録メールアドレス"
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            width={320}
            title="ライセンス数"
            value={numberLicense}
            onChange={(value) => setNumberLicense(value)}
          />
          <Input
            width={320}
            title="備考"
            value={remarks}
            onChange={(value) => setRemarks(value)}
          />
        </div>
        <div className="facility-information-admin-col">
          <Input
            width={320}
            title="事業者ID　※変更不可"
            value={businessId}
            onChange={(value) => setBusinessId(value)}
          />
          <Input
            width={320}
            title="提携先"
            value={partner}
            onChange={(value) => setPartner(value)}
          />
          <Input width={320} />
          <Input width={320} title="初期パスワード" type="password" />
        </div>
      </div>
      {false && (
        <div className="full-calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            height={800}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            eventContent={renderEventContent} // custom render function
            events={[
              { title: "event 1", date: "2023-11-08", icon: ["1", "2"] },
              { title: "event 2", date: "2023-11-09", icon: ["1", "2", "3"] },
              { title: "event 2", date: "2023-11-10", icon: ["2"] },
            ]}
          />
        </div>
      )}
      <Button
        key="back"
        text="保存"
        background="#0E6FBA"
        width={260}
        style={{ marginTop: 50 }}
        // onClick={onConfirmInfo}
        type="submit"
      />
    </form>
  );
};
export default FacilityInformation;

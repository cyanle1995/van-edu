import React from "react";
import "../styles.scss";

const accountInfo = {
  name: "Tên thành viên",
  avatar: "",
};

const StatusBar = () => {
  return (
    <div className="stautusbar-container">
      <div className="stautsbar-item">
        <img src="/avatar-user.svg" alt="image" className="avatar-img" />
        <div className="user-name">{accountInfo.name}</div>
      </div>

      <div className="stautsbar-item">
        <img src="/search.svg" alt="image" className="statusbar-icon" />
        <img src="/notication.svg" alt="image" className="statusbar-icon" />
      </div>
    </div>
  );
};

export default StatusBar;

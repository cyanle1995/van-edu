import React, { useState, useEffect } from "react";
import "./styles.scss";
import Select from "components/select/Select";
import Menu from "components/menu/Menu";
import { useHistory, useLocation } from "react-router-dom";
import logoIcon from "assets/icons/logo.png";
import { menuList } from "components/menu/Constant";

function AppHeader() {
  const history = useHistory();
  const location = useLocation();
  const isMainScreen = location.pathname === "/";
  const managerOpts = [
    { label: "manager1", value: "manager1" },
    { label: "manager2", value: "manager2" },
    { label: "manager3", value: "manager3" },
  ];
  const groupOpts = [
    { label: "group1", value: "group1" },
    { label: "group2", value: "group2" },
    { label: "group3", value: "group3" },
  ];
  const [manager, setManager] = useState(null);
  const [group, setGroup] = useState(null);
  const [screenName, setScreenName] = useState("");

  useEffect(() => {
    if (location.pathname) {
      const foundMenu = menuList.find((menu) =>
        location.pathname.includes(menu.url)
      );
      if (foundMenu) {
        if (foundMenu.childs?.length > 0) {
          const foundChild = foundMenu.childs.find((c) =>
            location.pathname.includes(c.url)
          );
          if (foundChild) setScreenName(foundChild.title);
        } else {
          setScreenName(foundMenu.title);
        }
      } else {
        setScreenName("");
      }
    }
  }, [menuList, location.pathname]);
  const goHome = () => {
    window.location.href = "/";
  };
  const onChangemanager = (value) => {
    setManager(value);
  };
  const onChangeGroup = (value) => {
    setGroup(value);
  };
  if (!isMainScreen) {
    return (
      <div className="header-container">
        <Menu />
        <div className="header-item" onClick={goHome}>
          <img src={logoIcon} className="logo-icon" />
        </div>
        {!isMainScreen && (
          <div className="header-container-item">
            <div className="header-screen-name">{screenName}</div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="header-container-main">
      <Menu />
      <div className="header-item" onClick={goHome}>
        <img src={logoIcon} className="logo-icon" />
      </div>
      {!isMainScreen && (
        <div className="header-item-center">
          <div className="header-item-row">{screenName}</div>
        </div>
      )}
      {isMainScreen && (
        <div className="header-item-center">
          <div className="header-item-row">ライセンス残量</div>
          <div className="header-item-row">6/30</div>
        </div>
      )}
      {isMainScreen && (
        <div className="header-item-filter">
          <div className="header-item-row">
            <div className="header-item-row-label">担当者：</div>
            <div className="header-item-row-content">
              <Select
                value={manager}
                options={managerOpts}
                onChange={onChangemanager}
                width={150}
              />
            </div>
          </div>
          <div className="header-item-row">
            <div className="header-item-row-label">グループ：</div>
            <div className="header-item-row-content">
              <Select
                value={group}
                options={groupOpts}
                onChange={onChangeGroup}
                width={150}
              />
            </div>
          </div>
        </div>
      )}
      {isMainScreen && (
        <div className="header-item">
          <div className="header-item-row-text" style={{ color: "#FDBA2C" }}>
            オンライン：6名
          </div>
          <div className="header-item-row-text" style={{ color: "#0E6FBA" }}>
            オフライン：0名
          </div>
          <div className="header-item-row-text">センサー未登録：０名</div>
        </div>
      )}
      {isMainScreen && (
        <div className="header-item">
          <div className="header-item-row" style={{ color: "#FF3131" }}>
            アラート：3名
          </div>
        </div>
      )}
    </div>
  );
}

export default AppHeader;

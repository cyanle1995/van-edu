/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { menuList, menuListAdmin, LOGOUT } from "./Constant";
import menuIcon from "assets/icons/menu.png";
import "./styles.scss";
import { useHistory, useLocation } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menus = () => {
  const userInfoString = localStorage.getItem("USER_INFO");
  let userInfo = null;
  userInfo = JSON.parse(userInfoString);
  const menus = userInfo.userId === "admin" ? menuListAdmin : menuList;
  return menus.map((menu) => {
    if (menu.childs?.length === 0) {
      return getItem(menu.title, menu.url, null);
    }
    return getItem(
      menu.title,
      menu.url,
      null,
      menu.childs.map((child) => {
        return getItem(child.title, child.url, null);
      })
    );
  });
};
const App = () => {
  const history = useHistory();
  const location = useLocation();
  const isMainScreen = location.pathname === "/";
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = ({ keyPath }) => {
    if (keyPath[0] === LOGOUT) {
      localStorage.removeItem("USER_INFO");
      window.location.href = "/login";
      return;
    }
    const reversed = keyPath.reverse();
    const path = reversed.join("");
    history.push(path);
    setShowMenu(false);
  };
  return (
    <div className="menu-containner">
      <img
        src={menuIcon}
        className="menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div style={{ display: !showMenu ? "none" : "" }}>
        <div
          style={{
            width: "65.1347px",
            height: "27.9855px",
            marginLeft: "0px",
            marginTop: "0px",
            top: isMainScreen ? "70px" : "55px",
            left: "25px",
            position: "absolute",
          }}
        >
          <div
            style={{
              clipPath: 'path("M 128 0 L 256 256 L 0 256 L 128 0 Z")',
              background: "rgb(230, 230, 230)",
              width: "256px",
              height: "256px",
              transform: "scale(0.254432, 0.109318)",
              transformOrigin: "0px 0px",
              touchAction: "pan-x pan-y pinch-zoom",
            }}
          ></div>
        </div>
        <Menu
          style={{
            width: 256,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={"inline"}
          theme={"light"}
          items={menus()}
          onClick={onClickMenu}
        />
      </div>
    </div>
  );
};
export default App;

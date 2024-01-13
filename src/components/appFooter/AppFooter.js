import React, { useState } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const menuList = [
  {
    key: "home",
    name: "Trang chủ",
    link: "/home",
    iconDefault: "/home.svg",
    iconActive: "/home-active.svg",
  },
  {
    key: "course",
    name: "Khoá học",
    link: "/course",
    iconDefault: "/course-default.svg",
    iconActive: "/course-active.svg",
  },
  {
    key: "master",
    name: "Chuyên gia",
    link: "/master",
    iconDefault: "/headset.svg",
    iconActive: "/headset.svg",
  },
  {
    key: "store",
    name: "Gian hàng",
    link: "/store",
    iconDefault: "/store-default.svg",
    iconActive: "/store-active.svg",
  },
  {
    key: "account",
    name: "Cá nhân",
    link: "/account",
    iconDefault: "/avatar-user.svg",
    iconActive: "/avatar-user.svg",
  },
];

function AppFooter() {
  const [pageIsSelected, setPageIsSelected] = useState("home");
  const location = useLocation();
  const isUseFooter =
    location.pathname !== "/" && location.pathname !== "/login";

  if (!isUseFooter) {
    return <div></div>;
  }

  const onChangeNav = (isActive, key) => {
    if(isActive) setPageIsSelected(key);
  };

  return (
    <footer className="footer-container-main">
      {menuList.map((item) => {
        return (
          <NavLink
            className={`navigation ${item.key === pageIsSelected ? "active" : ""}`}
            isActive={(isActive) => onChangeNav(isActive, item.key)}
            to={item.link}
          >
            <img
              className={`icon ${item.key === "master" ? "large" : ""}`}
              src={item.key === pageIsSelected ? item.iconActive : item.iconDefault}
              alt="icon"
            />
            <div className="text">{item.name}</div>
          </NavLink>
        );
      })}
    </footer>
  );
}

export default AppFooter;

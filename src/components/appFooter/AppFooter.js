import React, { useState } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const menu = [
  { name: "Trang chủ", link: "/home", icon: "/speaker.svg" },
  { name: "Khoá học", link: "/course", icon: "/speaker.svg" },
  { name: "Chuyên gia", link: "/group", icon: "/speaker.svg" },
  { name: "Gian hàng", link: "/lesson-detail", icon: "/speaker.svg" },
  { name: "Cá nhân", link: "/account", icon: "/speaker.svg" },
];

function AppFooter() {
  const location = useLocation();
  const isUseFooter =
    location.pathname !== "/" && location.pathname !== "/login";

  if (!isUseFooter) {
    return <div></div>;
  }

  return (
    <footer className="footer-container-main">
      {menu.map((item, index) => {
        return (
          <NavLink
            className="navigation"
            activeClassName="active"
            key={index}
            to={item.link}
          >
            <img className="icon" src={item.icon} alt="image" />
            <div className="text">{item.name}</div>
          </NavLink>
        );
      })}
    </footer>
  );
}

export default AppFooter;

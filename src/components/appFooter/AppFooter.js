import React, { useState } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const menu = [
  { key: 'home', name: "Trang chủ", link: "/home", icon: "/ic_home.png", iconActive: "/ic_home_active.png" },
  { key: 'course', name: "Khoá học", link: "/course", icon: "/ic_course.png", iconActive: "/ic_course_active.png" },
  { key: 'expert', name: "Chuyên gia", link: "/course", icon: "/ic_chuyengia.png", iconActive: '/ic_chuyengia.png' },
  { key: 'store', name: "Gian hàng", link: "/course", icon: "/ic_gianhang.png", iconActive: '/ic_gianhang_active.png' },
  { key: 'account', name: "Cá nhân", link: "/account", icon: "/ic_canhan.png", iconActive: '/ic_canhan.png' },
];

function AppFooter() {
  const location = useLocation();
  const isUseFooter =
    location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/result";

  if (!isUseFooter) {
    return <div></div>;
  }
  console.log('location.pathname', location.pathname);
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
            <img className="nav-bar-icon" style={{width: item.name === 'Chuyên gia' ? 56 : 24, height: item.name === 'Chuyên gia' ? 56 : 24}} src={location.pathname === item.link ? item.iconActive : item.icon} alt="image" />
            <div className="text">{item.name}</div>
          </NavLink>
        );
      })}
    </footer>
  );
}

export default AppFooter;

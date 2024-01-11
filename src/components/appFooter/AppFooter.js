import React from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";

function AppFooter() {
  const location = useLocation();
  const isUseFooter =
    location.pathname !== "/" && location.pathname !== "/login";

  if (!isUseFooter) {
    return <div></div>;
  }

  return (
  <footer className="footer-container-main">
    test day la footer
  </footer>
  );
}

export default AppFooter;

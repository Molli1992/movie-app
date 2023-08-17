import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

        <i className="left-menu-icon fas fa-search"></i>

      <Link to="/" className="link-sidebar">
        <i className="left-menu-icon fas fa-home"></i>
      </Link>

      <Link to="/foro" className="link-sidebar">
        <i className="left-menu-icon fas fa-users"></i>
      </Link>

      <Link to="/donacion" className="link-sidebar">
        <i className="left-menu-icon fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">flakes</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <Link to="/" className="menu-list-item">
              Inicio
            </Link>
            <Link to="/foro" className="menu-list-item">Foro</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

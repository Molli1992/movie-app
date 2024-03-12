import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();

  const alert = () => {
    Swal.fire({
      title: "",
      text: "La ruta del foro esta en actualizacion no se puede usar por el momento",
      icon: "",
      confirmButtonText: "Ok",
    });
  };

  const onClickRouteHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo" onClick={onClickRouteHome}>
            flakes
          </h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <Link to="/" className="menu-list-item">
              Inicio
            </Link>
            <Link className="menu-list-item" onClick={alert}>
              Foro
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

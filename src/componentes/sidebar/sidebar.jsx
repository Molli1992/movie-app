import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Sidebar() {
  const alertForo = () => {
    Swal.fire({
      title: "",
      text: "La ruta del foro esta en actualizacion no se puede usar por el momento",
      icon: "",
      confirmButtonText: "Ok",
    });
  };

  const alertDonacion = () => {
    Swal.fire({
      title: "",
      text: "La ruta de las donaciones esta en actualizacion no se puede usar por el momento",
      icon: "",
      confirmButtonText: "Ok",
    });
  };

  const alertSearchBar = () => {
    Swal.fire({
      title: "",
      text: "La funcion de busqueda esta en actualizacion no se puede usar por el momento",
      icon: "",
      confirmButtonText: "Ok",
    });
  };
  return (
    <div className="sidebar">
      <i className="left-menu-icon fas fa-search" onClick={alertSearchBar}></i>

      <Link to="/" className="link-sidebar">
        <i className="left-menu-icon fas fa-home"></i>
      </Link>

      <Link className="link-sidebar" onClick={alertForo}>
        <i className="left-menu-icon fas fa-users"></i>
      </Link>

      <Link className="link-sidebar" onClick={alertDonacion}>
        <i className="left-menu-icon fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
}

export default Sidebar;

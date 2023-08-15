import React from "react";
import "./header.css";
import Logo from "../../imagenes/logo-stream-removebg-preview.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container flexSB">
        <nav className="flexSB">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="flexSB">
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/series">Series</Link>
            </a>
            <a>
              <Link to="/movies">Movies</Link>
            </a>
            <a>
              <Link to="/forum">Forum</Link>
            </a>
            <a>
              <Link to="/contact">Contact</Link>
            </a>
          </ul>
        </nav>
        <div className="account flexSB">
          <input className="input-search" placeholder="Search"></input>
          <button className="button-search">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import "./featured.css";
import { Link } from "react-router-dom";
import ImgTittle from "../../imagenes/django-tittle-removebg-preview.png";

function Features() {
  return (
    <div className="body-feature">
      <div className="featured-content">
        <img className="featured-tittle" src={ImgTittle} alt="tittle" />
        <p className="featured-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem a id
          modi necessitatibus sunt doloribus quod tempore error beatae ratione,
          porro obcaecati nostrum illum tenetur eligendi? Molestiae quibusdam
          illo quis.
        </p>
        <Link to="/pelicula" className="featured-button">
          Ver
        </Link>
      </div>
      <div className="container-feature-tittle">
        <h1>Elegi tu genero favorito:</h1>
      </div>
      <div className="container-filtros-features">
        <Link className="link-filtro">Fantasia</Link>
        <Link className="link-filtro">Accion</Link>
        <Link className="link-filtro">Drama</Link>
        <Link className="link-filtro">Comedia</Link>
        <Link className="link-filtro">Terror</Link>
        <Link className="link-filtro">Aventura</Link>
        <Link className="link-filtro">Belica</Link>
        <Link className="link-filtro">Policial</Link>
        <Link className="link-filtro">Ciencia Ficcion</Link>
      </div>
    </div>
  );
}

export default Features;

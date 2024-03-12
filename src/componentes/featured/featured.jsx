import React from "react";
import "./featured.css";
import { Link } from "react-router-dom";
import ImgTittle from "../../imagenes/django-tittle-removebg-preview.png";

function Features() {
  const filtros = false;
  return (
    <div className="body-feature">
      <div className="featured-content">
        <img className="featured-tittle" src={ImgTittle} alt="tittle" />
        <p className="featured-desc">
          Acompañado por un cazarrecompensas alemán, un esclavo liberado, Django
          viaja a través de Estados Unidos para liberar a su esposa del sádico
          propietario de una plantación. Ve todo lo que quieras. Quentin
          Tarantino y Christoph Waltz ganaron óscares por esta violenta
          incursión del director en los spaghetti wésterns.
        </p>
        <Link to="/pelicula/django" className="featured-button">
          Ver
        </Link>
      </div>
      <div className="container-feature-tittle">
        <h1>Busca tu pelicula favorita:</h1>
      </div>
      {filtros ? (
        <div className="container-filtros-features">
          <Link className="link-filtro">Fantasia</Link>
          <Link className="link-filtro">Accion</Link>
          <Link className="link-filtro">Drama</Link>
          <Link className="link-filtro">Comedia</Link>
        </div>
      ) : null}
    </div>
  );
}

export default Features;

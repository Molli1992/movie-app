import React from "react";
import "./movieList.css";
import { Link } from "react-router-dom";
import arrayFantasia from "../../peliculas/peliculasFantasia";

function MovieList() {


  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">FANTASIA</h1>
      <div className="movie-list-wrapper">
          <div className="movie-list">
            {arrayFantasia &&
              arrayFantasia.map((pelicula) => {
                return (
                  <div className="movie-list-item">
                    <img
                      className="movie-list-item-img"
                      src={pelicula.img}
                      alt={pelicula.titulo}
                    />
                    <span className="movie-list-item-title">
                      {pelicula.titulo}
                    </span>
                    <p className="movie-list-item-desc">
                      {pelicula.descripcion}
                    </p>
                    <Link to={`/pelicula/${pelicula.titulo}`} className="movie-list-item-button">
                      Ver
                    </Link>
                  </div>
                );
              })}
          </div>

        <i className="fa-solid fa-chevron-right arrow"></i>
      </div>
    </div>
  );
}

export default MovieList;

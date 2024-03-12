import React from "react";
import { Link } from "react-router-dom";
import arrayComedia from "../../peliculas/peliculasComedia";

function MovieListComedia() {
  var clickCounter = 0;

  const onClickArrwo = () => {
    const ratio = Math.floor(window.innerWidth / 270);
    const moviesList = document.querySelector(".movie-list-comedia");
    const itemNumber = moviesList.querySelectorAll("img").length;

    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      const style = window.getComputedStyle(moviesList);
      const matrix = new DOMMatrix(style.transform);
      const currentTranslateX = matrix.m41;

      moviesList.style.transform = `translateX(${currentTranslateX - 300}px)`;
      clickCounter++;
    } else {
      moviesList.style.transform = "translateX(0)";
      clickCounter = 0;
    }
  };

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">COMEDIA</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list-comedia">
          {arrayComedia &&
            arrayComedia.map((pelicula) => {
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
                  <p className="movie-list-item-desc">{pelicula.descripcion}</p>
                  <Link
                    to={`/pelicula/${pelicula.titulo}`}
                    className="movie-list-item-button"
                  >
                    Ver
                  </Link>
                </div>
              );
            })}
        </div>

        <i
          className="fa-solid fa-chevron-right arrow"
          onClick={onClickArrwo}
        ></i>
      </div>
    </div>
  );
}

export default MovieListComedia;

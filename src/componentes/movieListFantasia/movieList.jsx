import React from "react";
import "./movieList.css";
import { Link } from "react-router-dom";
import arrayFantasia from "../../peliculas/peliculasFantasia";

function MovieList() {

  var clickCounter = 4;

  const onClickArrwo = () => {
    const moviesList = document.querySelector(".movie-list-fantasia");
    const itemNumber = moviesList.querySelectorAll("img").length;
    clickCounter++;
    console.log(clickCounter);

    if (clickCounter <= itemNumber) {
      moviesList.style.transform = `translateX(
        ${moviesList.computedStyleMap().get("transform")[0].x.value - 300}px)`;
    } else {
      moviesList.style.transform = "translateX(0)";
      clickCounter = 4;
    }

  };


  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">FANTASIA</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list-fantasia">
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

        <i className="fa-solid fa-chevron-right arrow" onClick={onClickArrwo}></i>
      </div>
    </div>
  );
}

export default MovieList;

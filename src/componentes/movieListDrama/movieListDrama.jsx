import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../../imagenes/drama/Apocalypse_Now.jpg";
import IMG2 from "../../imagenes/drama/Gladiator.jpg";
import IMG3 from "../../imagenes/drama/La_lista_de_Schindler.jpg";
import IMG4 from "../../imagenes/drama/Taxi_Driver.jpg";
import IMG5 from "../../imagenes/drama/boyhood.jpg";
import IMG6 from "../../imagenes/drama/la-escafandra-y-la-mariposa.jpg";

function MovieListDrama() {
  const [count, setCount] = useState(0);
  const slider = () => {
    if (count === 0) {
      setCount(1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">DRAMA</h1>
      <div className="movie-list-wrapper">
        {count === 0 ? (
          <div className="movie-list">
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG1}
                alt="Apocalypse_Now"
              />
              <span className="movie-list-item-title">Apocalypse Now</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Ver
              </Link>
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG2} alt="Gladiator" />
              <span className="movie-list-item-title">Gladiator</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Ver
              </Link>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG3}
                alt="La_lista_de_Schindler"
              />
              <span className="movie-list-item-title">
                La lista de Schindler
              </span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Ver
              </Link>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG4}
                alt="Taxi_Driver"
              />
              <span className="movie-list-item-title">Taxi Driver</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Ver
              </Link>
            </div>
          </div>
        ) : (
          <div className="movie-list">
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG5} alt="boyhood" />
              <span className="movie-list-item-title">Boyhood</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Ver
              </Link>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG6}
                alt="la-escafandra-y-la-mariposa"
              />
              <span className="movie-list-item-title">
                La Escafandra y la Mariposa
              </span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Ver
              </Link>
            </div>
          </div>
        )}

        <i className="fa-solid fa-chevron-right arrow" onClick={slider}></i>
      </div>
    </div>
  );
}

export default MovieListDrama;

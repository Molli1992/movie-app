import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../../imagenes/comedia/El_dictador.jpg";
import IMG2 from "../../imagenes/comedia/due-date.jpg";
import IMG3 from "../../imagenes/comedia/hang-over-III.jpg";
import IMG4 from "../../imagenes/comedia/pineapple-express.jpg";
import IMG5 from "../../imagenes/comedia/your-highness.jpg";
import IMG6 from "../../imagenes/comedia/zombieland.jpg";

function MovieListComedia() {
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
      <h1 className="movie-list-title">COMEDIA</h1>
      <div className="movie-list-wrapper">
        {count === 0 ? (
          <div className="movie-list">
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG1}
                alt="El Dictador"
              />
              <span className="movie-list-item-title">El Dictador</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Watch
              </Link>
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG2} alt="due-date" />
              <span className="movie-list-item-title">Due Date</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Watch
              </Link>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG3}
                alt="hang-over-III"
              />
              <span className="movie-list-item-title">Hang Over III</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Watch
              </Link>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG4}
                alt="pineapple-express"
              />
              <span className="movie-list-item-title">Pineapple Express</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Watch
              </Link>
            </div>
          </div>
        ) : (
          <div className="movie-list">
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG5}
                alt="your-highness"
              />
              <span className="movie-list-item-title">Your Highness</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Watch
              </Link>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG6}
                alt="zombieland"
              />
              <span className="movie-list-item-title">Zombieland</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <Link to="/pelicula" className="movie-list-item-button">
                Watch
              </Link>
            </div>
          </div>
        )}

          <i className="fa-solid fa-chevron-right arrow" onClick={slider}></i>
      </div>
    </div>
  );
}

export default MovieListComedia;

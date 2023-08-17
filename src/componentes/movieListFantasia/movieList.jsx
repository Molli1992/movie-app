import React, { useState } from "react";
import "./movieList.css";
import IMG1 from "../../imagenes/fantasia/avatar-el-camino-del-agua.jpg";
import IMG2 from "../../imagenes/fantasia/de-amor-y-monstruos.jpg";
import IMG3 from "../../imagenes/fantasia/bella-y-bestia.jpg";
import IMG4 from "../../imagenes/fantasia/el-mago-de-oz.jpg";
import IMG5 from "../../imagenes/fantasia/mortal-engines.jpg";
import IMG6 from "../../imagenes/fantasia/pesadillas.jpg";

function MovieList() {
  const [count, setCount] = useState(0);
  const slider = () => {
    if (count === 0) {
      setCount(1);
    } else {
      setCount(0);
    }
  };

  const onClick = () => {
    window.location.href = "/movie";
  }

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">FANTASIA</h1>
      <div className="movie-list-wrapper">
        {count === 0 ? (
          <div className="movie-list">
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG1} alt="AVATAR" />
              <span className="movie-list-item-title">Avatar</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
              </p>
              <button className="movie-list-item-button" onClick={onClick}>Watch</button>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG2}
                alt="AmorYMonstruos"
              />
              <span className="movie-list-item-title">Amor y Monstruos</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG3}
                alt="Bella y Bestia"
              />
              <span className="movie-list-item-title">Bella y Bestia</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG4}
                alt="Mago de OZ"
              />
              <span className="movie-list-item-title">Mago de OZ</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
          </div>
        ) : (
          <div className="movie-list">
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG5}
                alt="MaquinasMortales"
              />
              <span className="movie-list-item-title">Maquinas Mortales</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG6}
                alt="Pesadillas"
              />
              <span className="movie-list-item-title">Pesadillas</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
          </div>
        )}

        <button onClick={slider}>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>
      </div>
    </div>
  );
}

export default MovieList;

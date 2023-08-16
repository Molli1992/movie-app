import React, { useState } from "react";
import IMG1 from "../../imagenes/accion/abduction.jpg";
import IMG2 from "../../imagenes/accion/iron-man.jpg";
import IMG3 from "../../imagenes/accion/john-wick-4.jpg";
import IMG4 from "../../imagenes/accion/robin-hood.jpg";
import IMG5 from "../../imagenes/accion/santo.jpg";
import IMG6 from "../../imagenes/accion/un-buen-dia-para-morir-duro-de-matar.jpg";

function MovieListAccion() {
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
      <h1 className="movie-list-title">ACCION</h1>
      <div className="movie-list-wrapper">
        {count === 0 ? (
          <div className="movie-list">
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG1} alt="ABDUCTION" />
              <span className="movie-list-item-title">Abduction</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG2} alt="iron-man" />
              <span className="movie-list-item-title">Iron Man</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG3} alt="john-wick" />
              <span className="movie-list-item-title">John Wick 4</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG4}
                alt="robin-hood"
              />
              <span className="movie-list-item-title">Robin Hood</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
          </div>
        ) : (
          <div className="movie-list">
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={IMG5} alt="santo" />
              <span className="movie-list-item-title">Santo</span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
              </p>
              <button className="movie-list-item-button">Watch</button>
            </div>
            <div className="movie-list-item">
              <img
                className="movie-list-item-img"
                src={IMG6}
                alt="un-buen-dia-para-morir"
              />
              <span className="movie-list-item-title">
                Un Buen Dia para Morir
              </span>
              <p className="movie-list-item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus mollitia alias obcaecati magni delectus minima
                quisquam asperiores
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

export default MovieListAccion;

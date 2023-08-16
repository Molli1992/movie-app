import React from "react";
import "./movieList.css";
import IMG1 from "../../imagenes/fantasia/avatar-el-camino-del-agua.jpg";
import IMG2 from "../../imagenes/fantasia/de-amor-y-monstruos.jpg";
import IMG3 from "../../imagenes/fantasia/bella-y-bestia.jpg";
import IMG4 from "../../imagenes/fantasia/el-mago-de-oz.jpg";
import IMG5 from "../../imagenes/fantasia/mortal-engines.jpg";
import IMG6 from "../../imagenes/fantasia/pesadillas.jpg";


function MovieList() {


    return(
        <div className="movie-list-container">
            <h1 className="movie-list-title">FANTASIA</h1>
            <div className="movie-list-wrapper">
                <div className="movie-list">
                    <div className="movie-list-item">
                        <img className="movie-list-item-img" src={IMG1} alt="AVATAR"/>
                        <span className="movie-list-item-title">Avatar</span>
                        <p className="movie-list-item-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia 
                            alias obcaecati magni delectus minima quisquam asperiores
                        </p>
                        <button className="movie-list-item-button">Watch</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-img" src={IMG2} alt="AmorYMonstruosIMG"/>
                        <span className="movie-list-item-title">Amor y Monstruos</span>
                        <p className="movie-list-item-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia 
                            alias obcaecati magni delectus minima quisquam asperiores
                        </p>
                        <button className="movie-list-item-button">Watch</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-img" src={IMG3} alt="Bella y Bestia"/>
                        <span className="movie-list-item-title">Bella y Bestia</span>
                        <p className="movie-list-item-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia 
                            alias obcaecati magni delectus minima quisquam asperiores
                        </p>
                        <button className="movie-list-item-button">Watch</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-img" src={IMG4} alt="Mago de OZ"/>
                        <span className="movie-list-item-title">Mago de OZ</span>
                        <p className="movie-list-item-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia 
                            alias obcaecati magni delectus minima quisquam asperiores
                        </p>
                        <button className="movie-list-item-button">Watch</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-img" src={IMG5} alt="MaquinasMortalesIMG"/>
                        <span className="movie-list-item-title">Maquinas Mortales</span>
                        <p className="movie-list-item-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia 
                            alias obcaecati magni delectus minima quisquam asperiores
                        </p>
                        <button className="movie-list-item-button">Watch</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-img" src={IMG6} alt="PesadillasIMG"/>
                        <span className="movie-list-item-title">Pesadillas</span>
                        <p className="movie-list-item-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia 
                            alias obcaecati magni delectus minima quisquam asperiores
                        </p>
                        <button className="movie-list-item-button">Watch</button>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right arrow"></i>
            </div>
        </div>
    );
};

export default MovieList;
import React from "react";
import "./home.css";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Featured from "../featured/featured";
import MovieList from "../movieListFantasia/movieList";
import MovieListAccion from "../movieListAccion/movieListAccion";
import MovieListComedia from "../movieListComedia/movieListComedia";
import MovieListDrama from "../movieListDrama/movieListDrama";

function Home() {
  return (
    <div className="body-home">
      <Navbar />
      <Sidebar />
      <div className="container-home">
        <div className="content-container-home">
          <Featured />
          <MovieList />
          <MovieListAccion />
          <MovieListDrama />
          <MovieListComedia />
        </div>
      </div>
    </div>
  );
}

export default Home;

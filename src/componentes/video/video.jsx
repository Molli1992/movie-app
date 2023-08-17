import React, { useState } from "react";
import "./video.css";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import { useParams } from "react-router-dom";
import arrayFantasia from "../../peliculas/peliculasFantasia";
import arrayDrama from "../../peliculas/peliculasDrama";
import arrayComedia from "../../peliculas/peliculasComedia";
import arrayAccion from "../../peliculas/peliculasAccion";

function Video() {
  const { id } = useParams();
  const [state, setState] = useState(false);

  if (state === false) {
    const pelicula = arrayFantasia.find((dato) => {
      return dato.titulo.includes(id);
    });

    if (pelicula) {
      setState(pelicula);
    }
  }

  if (state === false) {
    const pelicula = arrayDrama.find((dato) => {
      return dato.titulo.includes(id);
    });

    if (pelicula) {
      setState(pelicula);
    }
  }

  if (state === false) {
    const pelicula = arrayAccion.find((dato) => {
      return dato.titulo.includes(id);
    });

    if (pelicula) {
      setState(pelicula);
    }
  }

  if (state === false) {
    const pelicula = arrayComedia.find((dato) => {
      return dato.titulo.includes(id);
    });

    if (pelicula) {
      setState(pelicula);
    }
  }

  console.log(state);

  if (state !== false) {
    return (
      <div className="body-video">
        <Navbar />
        <Sidebar />
        <div className="container-video">
          <div className="container-iframe">
            <iframe
              width="100%"
              height="100%"
              src={state.video}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
              title={state.titulo}
            ></iframe>
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div>
          <h1></h1>
        </div>
    );
  }
}

export default Video;

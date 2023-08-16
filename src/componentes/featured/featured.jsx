import React from "react";
import "./featured.css";
import ImgTittle from "../../imagenes/django-tittle-removebg-preview.png";

function Features() {
  return (
    <div className="featured-content">
      <img className="featured-tittle" src={ImgTittle} alt="tittle"/>
      <p className="featured-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem a id modi 
        necessitatibus sunt doloribus quod tempore error beatae ratione, porro obcaecati
         nostrum illum tenetur eligendi? Molestiae quibusdam illo quis.
      </p>
      <button className="featured-button">WATCH</button>
    </div>
  );
}

export default Features;

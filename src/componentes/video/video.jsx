import React from "react";
import "./video.css";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

function Video() {
  return (
    <div className="body-video">
      <Navbar />
      <Sidebar />
      <div className="container-video">
        <div className="container-iframe">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/D8ToTUXxMf4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;

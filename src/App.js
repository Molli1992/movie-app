import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/home/home";
import Video from "./componentes/video/video";


function App() {
  return (

 <div className="body">

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/pelicula" element={<Video />} />

      </Routes>

    </BrowserRouter>

 </div>

  );

};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/home/home";


function App() {
  return (

 <div className="body">

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>

 </div>

  );

};

export default App;

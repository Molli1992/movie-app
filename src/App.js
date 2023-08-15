import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/header/header";
import Home from "./componentes/home/home";


function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>

  );

};

export default App;

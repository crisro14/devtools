import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Categoria from "./components/Categoria";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:categoria" element={<Categoria />} /> {/* Ruta con parámetro dinámico */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
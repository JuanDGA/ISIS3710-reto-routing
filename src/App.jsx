import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mascotas from "./views/Mascotas.jsx";
import NavBar from "./components/NavBar.jsx";
import Detail from "./views/Detail.jsx";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/:mascotaId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

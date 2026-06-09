import { Routes, Route, useLocation } from "react-router-dom";  
import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes"; 
import Equipo from "./pages/Equipo";
import Hacemos from "./pages/Hacemos"
import Whatsapp from './components/Whatsapp';
import Servicios from "./pages/Servicios";
import Empresa from "./pages/Empresa"

function App() {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      <Navigation />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/hacemos" element={<Hacemos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
      {isHomePage && <Whatsapp />}
    </>
  );
}

export default App;
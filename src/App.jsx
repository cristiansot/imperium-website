import { Routes, Route, useLocation } from "react-router-dom";  
import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes"; 
import Equipo from "./pages/Equipo";
import Footer from "./components/Footer";
import Whatsapp from './components/Whatsapp';

function App() {
  const location = useLocation();
  
  // Solo muestra en la página de inicio
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      <Navigation />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
      <Footer />
      {isHomePage && <Whatsapp />}
    </>
  );
}

export default App;
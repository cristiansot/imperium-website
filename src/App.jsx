import { Routes, Route } from "react-router-dom";  
import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes"; 
import Footer from "./components/Footer";
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <>
      <Navigation />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
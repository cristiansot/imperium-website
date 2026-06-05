import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Whatsapp from'./components/Whatsapp'

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
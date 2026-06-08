import logo from "../assets/logo.svg";
import videoBg from "../assets/video-1.mp4";
import Footer from "../components/Footer";

import '../assets/css/home.css'

function Home() {
  return (
     <>
      <section className="hero-section">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <div className="hero-content">
            <img
              src={logo}
              alt="Imperium"
              className="hero-logo"
            />

            <h1>Revisión, Asesoría y Gestión Normativa</h1>
          </div>
        </div>

      </section>

    <Footer />
  </>
  );
}

export default Home;
import logo from "../assets/logo.svg";
import videoBg from "../assets/video-1.mp4";
import Footer from "../components/Footer";

import "../assets/css/home.css";

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
          <div className="container">
            
            {/* Logo y título */}
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <img
                  src={logo}
                  alt="Imperium"
                  className="hero-logo mb-4"
                />

                <h1 className="hero-bajada"
                  >Revisión, Asesoría y Gestión Normativa</h1>
              </div>
            </div>

            {/* Listado */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ul className="hero-list">
                  <li>Permisología</li>
                  <li>Estudios</li>
                  <li>Asesorías Normativas</li>
                  <li>Expert Advisor (Consejeros Expertos)</li>
                  <li>Diagnósticos Estratégicos</li>
                  <li>Tramitación ante Variados Organismos del Estado</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
import { FaChevronRight } from "react-icons/fa";
import "../assets/css/footer.css";

function Footer() {
  return (
    <footer className="footer-imperium">
      <div className="container footer-card">
        <div className="row g-4">

          {/* Cambiado: col-sm-4 mantiene 3 columnas desde tablet pequeña */}
          <div className="col-sm-4 col-md-4 col-lg-4 footer-col">
            <div className="footer-item">
              <h3>
                <FaChevronRight className="footer-icon" />
                DIRECCIÓN
              </h3>

              <p>
                Avenida Nueva Providencia 1881 Oficina 1201
                <br />
                Providencia, Santiago
              </p>
            </div>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4 footer-col">
            <div className="footer-item col-central">
              <h3>
                <FaChevronRight className="footer-icon" />
                CÓDIGO POSTAL
              </h3>

              <p>7500520</p>
            </div>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4 footer-col">
            <div className="footer-item">
              <h3>
                <FaChevronRight className="footer-icon" />
                CONTACTO
              </h3>

              <p>
                contacto@imperiumasesorias.cl
                <br />
                +56 9 9006 2997
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
import '../assets/css/clientes.css'
import bgImage from '../assets/img/backgrounds/clientes.webp'; 
import { FaChevronRight } from "react-icons/fa";

import achondoimg from '../assets/img/logos/achondo.svg';
import invinsaImg from '../assets/img/logos/invinsa.svg';
import metalparImg from '../assets/img/logos/metalpar.svg';
import walmartImg from '../assets/img/logos/walmart.svg';
import araucoImg from '../assets/img/logos/arauco.svg';
import udlaImg from '../assets/img/logos/udla.svg';
import valdiviaImg from '../assets/img/logos/valdivia.svg';
import ovalImg from '../assets/img/logos/oval.svg';
import udpImg from '../assets/img/logos/udp.svg';
import geincoImg from '../assets/img/logos/geinco.svg';
import saludImg from '../assets/img/logos/salud.svg';
import cinepolisImg from '../assets/img/logos/cinepolis.svg';
import portlandImg from '../assets/img/logos/portland.svg';

const Clientes = () => {
  const clientesContinuo = [
    { id: 1, nombre: 'Daniel Achondo', imagen: achondoimg, clase: 'logo-achondo' },
    { id: 2, nombre: 'INVINSA', imagen: invinsaImg, clase: 'logo-invinsa' },
    { id: 3, nombre: 'Metalpar', imagen: metalparImg, clase: 'logo-metalpar' },
    { id: 4, nombre: 'Walmart', imagen: walmartImg, clase: 'logo-walmart' },
    { id: 5, nombre: 'Parque Arauco', imagen: araucoImg, clase: 'logo-arauco' },
    { id: 6, nombre: 'UDLA', imagen: udlaImg, clase: 'logo-udla' },
    { id: 7, nombre: 'Pedro de Valdivia', imagen: valdiviaImg, clase: 'logo-valdivia' }
  ];

  const clientesPeriodico = [
    { id: 8, nombre: 'Oval', imagen: ovalImg, clase: 'logo-oval' },
    { id: 9, nombre: 'UDP', imagen: udpImg, clase: 'logo-udp' },
    { id: 10, nombre: 'GEINCO', imagen: geincoImg, clase: 'logo-geinco' },
    { id: 11, nombre: 'Salud', imagen: saludImg, clase: 'logo-salud' },
    { id: 12, nombre: 'Cinépolis', imagen: cinepolisImg, clase: 'logo-cinepolis' },
    { id: 13, nombre: 'Portland', imagen: portlandImg, clase: 'logo-portland' }
  ];

  return (
    <section 
      className="clientes-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <h1 className="clientes-title">PRINCIPALES CLIENTES</h1>
        
        <div className="clientes-content">
          {/* ACOMPAÑAMIENTO CONTINUO - Izquierda */}
          <div className="categoria-clientes">
            <h3 className="categoria-title">
              <FaChevronRight className="title-icon" />
              <span>
                ACOMPAÑAMIENTO<br />
                CONTINUO
              </span>
            </h3>
            
            <div className="logos-wrapper">
              <div className="logos-grid logos-grid-continuo">
                {clientesContinuo.map((cliente) => (
                  <div key={cliente.id} className={`logo-item ${cliente.clase}`}>
                    <img 
                      src={cliente.imagen} 
                      alt={cliente.nombre}
                      className="cliente-logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACOMPAÑAMIENTO PERIÓDICO - Derecha */}
          <div className="categoria-clientes">
            <h3 className="categoria-title">
              <FaChevronRight className="title-icon" />
              <span>
                ACOMPAÑAMIENTO<br />
                PERIÓDICO
              </span>
            </h3>
            
            <div className="logos-wrapper">
              <div className="logos-grid logos-grid-periodico">
                {clientesPeriodico.map((cliente) => (
                  <div key={cliente.id} className={`logo-item ${cliente.clase}`}>
                    <img 
                      src={cliente.imagen} 
                      alt={cliente.nombre}
                      className="cliente-logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
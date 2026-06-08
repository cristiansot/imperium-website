import '../assets/css/clientes.css';
import { FaChevronRight } from "react-icons/fa";

const Clientes = () => {
  const clientesContinuo = [
    { id: 1, nombre: 'Daniel Achondo', imagen: '/img/logos/achondo.svg', clase: 'logo-achondo' },
    { id: 2, nombre: 'INVINSA', imagen: '/img/logos/invinsa.svg', clase: 'logo-invinsa' },
    { id: 3, nombre: 'Metalpar', imagen: '/img/logos/metalpar.svg', clase: 'logo-metalpar' },
    { id: 4, nombre: 'Walmart', imagen: '/img/logos/walmart.svg', clase: 'logo-walmart' },
    { id: 5, nombre: 'Parque Arauco', imagen: '/img/logos/arauco.svg', clase: 'logo-arauco' },
    { id: 6, nombre: 'UDLA', imagen: '/img/logos/udla.svg', clase: 'logo-udla' },
    { id: 7, nombre: 'Pedro de Valdivia', imagen: '/img/logos/valdivia.svg', clase: 'logo-valdivia' }
  ];

  const clientesPeriodico = [
    { id: 8, nombre: 'Oval', imagen: '/img/logos/oval.svg', clase: 'logo-oval' },
    { id: 9, nombre: 'UDP', imagen: '/img/logos/udp.svg', clase: 'logo-udp' },
    { id: 10, nombre: 'GEINCO', imagen: '/img/logos/geinco.svg', clase: 'logo-geinco' },
    { id: 11, nombre: 'Salud', imagen: '/img/logos/salud.svg', clase: 'logo-salud' },
    { id: 12, nombre: 'Cinépolis', imagen: '/img/logos/cinepolis.svg', clase: 'logo-cinepolis' },
    { id: 13, nombre: 'Portland', imagen: '/img/logos/portland.svg', clase: 'logo-portland' }
  ];

  return (
    <section 
      className="clientes-section"
      style={{
        backgroundImage: "url('/img/backgrounds/clientes.webp')",
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
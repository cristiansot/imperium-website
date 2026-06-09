// Empresa.jsx
import { FaChevronRight } from "react-icons/fa";
import '../assets/css/empresa.css';

const Empresa = () => {
  const serviciosLista = [
    "Permisología",
    "Estudios",
    "Asesorías Normativas",
    "Expert Advisor (Consejeros expertos)",
    "Diagnósticos estratégicos",
    "Tramitación ante variados Organismos del Estado."
  ];

  const fundadorInfo = {
    cargo: "SOCIO FUNDADOR",
    nombre: "FRANCISCO JARAMILLO DEL VALLE",
    especialidad: "Director General, Arquitecto.",
    descripcion: [
      "Revisor Independiente de Arquitectura.",
      "Primera Categoría MINVU.",
      "Gobernabilidad y Gestión Territorial PUC."
    ]
  };

  const circulos = [
    { id: 1, src: "/img/circle-1.svg", alt: "Círculo 1" },
    { id: 2, src: "/img/circle-2.svg", alt: "Círculo 2" },
    { id: 3, src: "/img/circle-3.svg", alt: "Círculo 3" }
  ];

  return (
    <section className="empresa-section">
      {/* Background layer */}
      <div className="empresa-bg-layer"></div>
      
      {/* Francisco image layer */}
      <div className="empresa-francisco-layer">
        <img 
          src="/img/equipo/francisco-trama.png" 
          alt="Francisco Jaramillo Del Valle"
        />
      </div>
    
      {/* Content layer */}
      <div className="empresa-content-layer">
        <div className="container">
          {/* Header centrado */}
          <div className="empresa-header">
            <h1 className="empresa-title">CONSULTORA IMPERIUM</h1>
            <div className="empresa-title-line"></div>
          </div>

          {/* Contenedor principal con los recuadros */}
          <div className="empresa-main-content">
            <div className="empresa-col-right-centered">
              {/* Círculos en columna sobre las cajas */}
              <div className="circulos-columna">
                {circulos.map((circulo) => (
                  <div key={circulo.id} className="circulo-item">
                    <img 
                      src={circulo.src} 
                      alt={circulo.alt}
                      className="circulo-svg"
                    />
                  </div>
                ))}
              </div>

              <div className="recuadros-container">
                {/* Primer recuadro - Especializada en: */}
                <div className="recuadro recuadro-especialidades">
                  <div className="recuadro-header">
                    <FaChevronRight className="recuadro-header-icon" />
                    <h2 className="recuadro-title">ESPECIALIZADA EN:</h2>
                  </div>
                  <ul className="recuadro-lista">
                    {serviciosLista.map((item, index) => (
                      <li key={index}>
                        <span className="lista-bullet">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Segundo recuadro - Fundador */}
                <div className="recuadro recuadro-fundador">
                  <div className="fundador-header">
                    <div className="fundador-nombre-wrapper">
                      <FaChevronRight className="fundador-header-icon" />
                      <h2 className="fundador-nombre">{fundadorInfo.nombre}</h2>
                    </div>
                    <h3 className="fundador-cargo">{fundadorInfo.cargo}</h3>
                    <h4 className="fundador-especialidad">{fundadorInfo.especialidad}</h4>
                  </div>
                  
                  <ul className="fundador-descripcion">
                    {fundadorInfo.descripcion.map((item, index) => (
                      <li key={index}>
                        <span className="fundador-bullet">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresa;
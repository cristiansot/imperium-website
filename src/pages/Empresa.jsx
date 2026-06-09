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

  return (
    <section className="empresa-section">
      {/* Background layer - index 0 */}
      <div className="empresa-bg-layer"></div>
      
      {/* Francisco image layer - index 1 */}
      <div className="empresa-francisco-layer">
        <img 
          src="/img/equipo/francisco-trama.png" 
          alt="Francisco Jaramillo Del Valle"
        />
      </div>
    
      {/* Content layer - index 3 */}
      <div className="empresa-content-layer">
        <div className="container">
          {/* Header centrado */}
          <div className="empresa-header">
            <h1 className="empresa-title">CONSULTORA IMPERIUM</h1>
            <div className="empresa-title-line"></div>
          </div>

          {/* Contenedor centrado para los recuadros */}
          <div className="empresa-main-content">
            {/* Columna izquierda con imagen visible (sin overlay adicional) */}
            <div className="empresa-col-left-visible"></div>
            
            {/* Columna derecha con recuadros centrados */}
            <div className="empresa-col-right-centered">
              <div className="recuadros-container">
                {/* Primer recuadro */}
                <div className="recuadro recuadro-especialidades">
                  <div className="recuadro-header">
                    <FaChevronRight className="recuadro-header-icon" />
                    <h2 className="recuadro-title">Especializada en:</h2>
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
                
                {/* Segundo recuadro */}
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
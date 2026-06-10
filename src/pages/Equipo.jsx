import { FaChevronRight } from "react-icons/fa";
import '../assets/css/equipo.css';

const Equipo = () => {
  const equipoData = [
    {
      id: 1,
      nombre: "FRANCISCO JAVIER JARAMILLO DEL VALLE",
      cargo: "SOCIO / LÍDER / DIRECTOR GENERAL",
      imagen: "/img/equipo/francisco.webp",
      alt: "Francisco Javier Jaramillo",
      descripcion: [
        "Revisor Independiente de Arquitectura MINVU Primera Categoría.",
        "Arquitecto Universidad Central 2005."
      ]
    },
    {
      id: 2,
      nombre: "FRANCISCA SOLIS ZARHI",
      cargo: "ALIANZA",
      imagen: "/img/equipo/francisca.webp",
      alt: "Francisca Solis Zarhi",
      descripcion: [
        "Arquitecta Senior.",
        "Arquitecta Pontificia Universidad Católica de Chile 2009.",
        "Experticia: Revisora - Gestión Municipal - Arquitecta Desarrollo - Modelado Digital."
      ]
    },
    {
      id: 3,
      nombre: "KATHERINE MUÑOZ ROJAS",
      cargo: "ALIANZA",
      imagen: "/img/equipo/katherine.webp",
      alt: "Katherine Muñoz Rojas",
      descripcion: [
        "Arquitecta.",
        "Arquitecta Universidad Andrés Bello 2016.",
        "Experticia: Revisora - Gestión Municipal - Arquitecta Coordinadora - Oficina Técnica."
      ]
    },
    {
      id: 4,
      nombre: "CRISTINA ARÉVALO GUITIÉRREZ",
      cargo: "ALIANZA",
      imagen: "/img/equipo/cristina.webp",
      alt: "Cristina Arévalo Guitiérrez",
      descripcion: [
        "Arquitecta.",
        "Arquitecta Universidad San Sebastián 2020.",
        "Experticia: Gestión Municipal - Arquitecta Desarrollo - Modelado Digital."
      ]
    }
  ];

  const experienciaItems = [
    "Historial laboral documentado como Arquitectos Revisores DOM.",
    "Historial laboral en empresas de Gerenciamiento, Asesoría y Gestión de Proyectos de Construcción.",
    "Revisión, coordinación e inspección de proyectos y obras de construcción."
  ];

  return (
    <section 
      className="equipo-section"
      style={{
        backgroundImage: "url('/img/backgrounds/equipo.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="equipo-shape">
        <img src="/img/backgrounds/shape.svg" alt="Decoración de fondo" />
      </div>

      <div className="container">
        <h1 className="equipo-title">NUESTRO EQUIPO</h1>
        
        <h2 className="equipo-subtitle">
          "Trabajamos acorde a los nuevos tiempos laborales. Generamos alianzas para lograr objetivos, con profesionales según Experticia"
        </h2>
        
        <div className="equipo-content">
          {equipoData.map((miembro) => (
            <div key={miembro.id} className="equipo-card">
              <div className="equipo-foto">
                <img 
                  src={miembro.imagen} 
                  alt={miembro.alt}
                  loading="lazy"
                />
              </div>
              
              <div className="equipo-info">
                <div className="equipo-titulos">
                  <h3 className="equipo-nombre">{miembro.nombre}</h3>
                  <h4 className="equipo-cargo">{miembro.cargo}</h4>
                </div>
                
                <div className="equipo-descripcion-wrapper">
                  <FaChevronRight className="equipo-icon" aria-hidden="true" />
                  <ul className="equipo-descripcion">
                    {miembro.descripcion.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experiencia-container">
          <div className="equipo-titulo">
            <h2 className="equipo-experiencia-title">
              EXPERIENCIA Y TRAYECTORIA
            </h2>
          </div>
          
          <div className="equipo-experiencia">
            <div className="equipo-experiencia-grid">
              {experienciaItems.map((item, index) => (
                <div key={index} className="equipo-experiencia-item">
                  <div className="equipo-dot" aria-hidden="true"></div>
                  <p className="equipo-experiencia-textos">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
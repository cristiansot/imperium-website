import franciscoimg from '../assets/img/equipo/francisco.webp';
import franciscaimg from '../assets/img/equipo/francisca.webp';
import katherineimg from '../assets/img/equipo/katherine.webp';
import cristinaimg from '../assets/img/equipo/cristina.webp';
import bgImage from '../assets/img/backgrounds/equipo.webp';
import shapeImage from '../assets/img/backgrounds/shape.svg'; 
import { FaChevronRight } from "react-icons/fa";
import '../assets/css/equipo.css'

function Equipo() {
  const equipoData = [
    {
      id: 1,
      nombre: "FRANCISCO JAVIER JARAMILLO DEL VALLE",
      cargo: "SOCIO / LÍDER / DIRECTOR GENERAL",
      imagen: franciscoimg,
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
      imagen: franciscaimg,
      alt: "Francisca",
      descripcion: [
        "Arquitecta Senior.",
        "Arquitecta Pontificia Universidad Católica de Chile 2009.",
        "Expertiz: Revisora - Gestión Municipal - Arquitecta Desarrollo - Modelado Digital."
      ]
    },
    {
      id: 3,
      nombre: "KATHERINE MUÑOZ ROJAS",
      cargo: "ALIANZA",
      imagen: katherineimg,
      alt: "Katherine",
      descripcion: [
        "Arquitecta.",
        "Arquitecta Universidad Andrés Bello 2016.",
        "Expertiz: Revisora - Gestión Municipal - Arquitecta Coordinadora - Oficina Técnica."
      ]
    },
    {
      id: 4,
      nombre: "CRISTINA ARÉVALO GUITIÉRREZ",
      cargo: "ALIANZA",
      imagen: cristinaimg,
      alt: "Cristina",
      descripcion: [
        "Arquitecta.",
        "Arquitecta Universidad San Sebastián 2020.",
        "Expertiz: Gestión Municipal - Arquitecta Desarrollo - Modelado Digital"
      ]
    }
  ];

  return (
    <section 
      className="equipo-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Shape decorativo */}
      <div className="equipo-shape">
        <img src={shapeImage} alt="shape" />
      </div>

      <div className="container">
        <h1 className="equipo-title">NUESTRO EQUIPO</h1>
        
        {/* Subtítulo */}
        <h2 className="equipo-subtitle">
          "Trabajamos acorde a los nuevos tiempos laborales. Generamos alianzas para lograr objetivos, con profesionales según expertiz"
        </h2>
        
        <div className="equipo-content">
          {equipoData.map((miembro) => (
            <div key={miembro.id} className="equipo-card">
              {/* Foto izquierda */}
              <div className="equipo-foto">
                <img 
                  src={miembro.imagen} 
                  alt={miembro.alt}
                  loading="lazy"
                />
              </div>
              
              {/* Contenido derecho */}
              <div className="equipo-info">
                {/* Títulos */}
                <div className="equipo-titulos">
                  <h3 className="equipo-nombre">{miembro.nombre}</h3>
                  <h4 className="equipo-cargo">{miembro.cargo}</h4>
                </div>
                
                {/* Descripción con ícono */}
                <div className="equipo-descripcion-wrapper">
                  <FaChevronRight className="equipo-icon" />
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
      </div>
    </section>
  );
}

export default Equipo;
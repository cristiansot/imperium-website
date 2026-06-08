import { FaChevronRight } from "react-icons/fa";
import '../assets/css/servicios.css';

const Servicios = () => {
  const serviciosData = [
    {
      titulo: "ARQUITECTOS REVISORES INDEPENDIENTES",
      items: [
        "Revisión Digital de expedientes con anotaciones en planos.",
        "Revisión entre 5 a 7 días hábiles.",
        "Informe Favorable con Firma Electrónica Avanzada."
      ]
    },
    {
      titulo: "PERMISOLOGIA Y REGULARIZACIONES",
      items: [
        "Cabidas.",
        "Anteproyectos DOM.",
        "Revisión y armado de expedientes de regularización adaptándolos a norma.",
        "Patrocinios."
      ]
    }
  ];

  return (
    <section 
      className="servicios-section"
      style={{
        backgroundImage: "url('/img/backgrounds/servicios.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      <div className="container">
        <h1 className="servicios-title">NUESTROS PRINCIPALES SERVICIOS</h1>

        <div className="servicios-content">
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="servicios-card">
              <div className="servicios-header">
                <FaChevronRight className="servicios-header-icon" />
                <span className="servicios-numero">{servicio.id}</span>
                <h3 className="servicios-card-titulo">{servicio.titulo}</h3>
              </div>
              <ul className="servicios-lista">
                {servicio.items.map((item, index) => (
                  <li key={index}>
                    <span className="servicios-li-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
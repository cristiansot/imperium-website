import { FaChevronRight } from "react-icons/fa";
import "../assets/css/servicios.css";

const Servicios = () => {
  const serviciosData = [
    {
      id: 1,
      titulo: "ARQUITECTOS REVISORES INDEPENDIENTES",
      items: [
        "Revisión Digital de expedientes con anotaciones en planos.",
        "Revisión entre 5 a 7 días hábiles.",
        "Informe Favorable con Firma Electrónica Avanzada.",
        "Otros",
      ],
    },
    {
      id: 2,
      titulo: "PERMISOLOGIA Y REGULARIZACIONES",
      items: [
        "Cabidas.",
        "Anteproyectos DOM.",
        "Revisión y armado de expedientes de regularización adaptándolos a norma.",
        "Patrocinios.",
        "Otros",
      ],
    },
    {
      id: 3,
      titulo: "APORTES Y CONOCIMIENTO DEL EQUIPO",
      items: [
        "Expert Advisor. (Consejeros expertos)",
        "Anteproyectos DOM.",
        "Normativa urbana.",
        "Permisos.",
        "Interpretación regulatoria.",
        "Factibilidad de proyectos.",
        "Tramitación municipal.",
        "Procesos de aprobación.",
        "Interpretación regulatoria.",
        "Evaluación preliminar de cabidas y usos de suelo.",
        "Otros",
      ],
    },
  ];

  return (
    <section
      className="servicios-section"
      style={{
        backgroundImage: "url('/img/backgrounds/servicios.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <h1 className="servicios-title">NUESTROS SERVICIOS</h1>

        <div className="servicios-content">
          {serviciosData.map((servicio) => (
            <div
              key={servicio.id}
              className={`servicios-card ${
                servicio.id === 3 ? "servicios-card-full" : ""
              }`}
            >
              <div className="servicios-header">
                <FaChevronRight className="servicios-header-icon" />
                <h2 className="servicios-card-titulo">
                  {servicio.titulo}
                </h2>
              </div>

              {servicio.id === 3 ? (
                <div className="servicios-lista-doble">
                  {/* Columna izquierda */}
                  <ul className="servicios-lista">
                    {servicio.items.slice(0, 5).map((item, index) => (
                      <li key={index}>
                        <span className="servicios-li-dot"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Columna derecha */}
                  <ul className="servicios-lista">
                    {servicio.items.slice(5).map((item, index) => (
                      <li key={index}>
                        <span className="servicios-li-dot"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="servicios-lista">
                  {servicio.items.map((item, index) => (
                    <li key={index}>
                      <span className="servicios-li-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
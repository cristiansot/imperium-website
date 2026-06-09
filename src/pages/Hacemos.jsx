import '../assets/css/hacemos.css';

const Hacemos = () => {
  const diferenciasItems = [
    {
      id: 1,
      titulo: "EXPEDIENTES DE CALIDAD",
      texto: 'Nos destacamos por enfocarnos en la presentación de expedientes "de calidad Inmejorable" para evitar actas de observaciones y lograr agilidad en las aprobaciones.'
    },
    {
      id: 2,
      titulo: "GESTIÓN PÚBLICA",
      texto: "Gestión con la institución pública, discutir los temas de fondo y agilizar los temas de forma. Buena relación de respeto y transparencia con los funcionarios para lograr objetivo común de aprobación."
    },
    {
      id: 3,
      titulo: "ATENCIÓN DE EXCELENCIA",
      texto: "Atención de excelencia para con los clientes, formatos, resúmenes y material didáctico de apoyo. Constante actualización e interpretación regulatoria."
    }
  ];

  return (
    <section 
      className="hacemos-section"
      style={{
        backgroundImage: "url('/img/backgrounds/hacemos.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <h1 className="hacemos-title">NUESTRO TRABAJO</h1>
        
        <h2 className="hacemos-subtitle">
          ¿QUÉ NOS HACE DIFERENTES?
        </h2>

        <div className="hacemos-descripcion">
          <p>
            Además de la asesoría en materias técnicas urbanísticas y a la revisión independiente 
            de proyectos de construcción, según lo dispuesto en el Art. 116 bis de la Ley General 
            de Urbanismo y Construcciones, nos diferenciamos por:
          </p>
        </div>

        <div className="hacemos-content">
          {diferenciasItems.map((item) => (
            <div key={item.id} className="hacemos-card">
              <div className="hacemos-numero">
                <span className="hacemos-numero-grande">{item.id}</span>
              </div>
              <div className="hacemos-info">
                <h2 className="hacemos-card-titulo">{item.titulo}</h2>
                <div className="hacemos-dot" aria-hidden="true"></div>
                <p className="hacemos-texto">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hacemos;
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/logo-2.svg";
import '../assets/css/navbar.css'

function Navigation() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="py-3 navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center ms-3">
          <img 
            src={logo}
            alt="Imperium"
            style={{
              width: "200px",
              height: "auto"
            }}
          />
        </Navbar.Brand>
a
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Quiénes Somos</Nav.Link>
            <Nav.Link href="#servicios">Qué Hacemos</Nav.Link>
            <Nav.Link href="#servicios">Equipo</Nav.Link>
            <Nav.Link href="#clientes">Clientes</Nav.Link>

            <Button 
              className="btn-advisory ms-lg-3 px-4" 
              href="mailto:contacto@imperiumasesorias.cl"
            >
              Solicitar Asesoría
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
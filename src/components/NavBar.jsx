// src/components/NavBar.jsx
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-2.svg";
import '../assets/css/navbar.css';

function Navigation() {
  const location = useLocation();

  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="py-3 navbar-custom">
      <Container>
        <Link to="/" className="d-flex align-items-center ms-3 text-decoration-none">
          <img 
            src={logo}
            alt="Imperium"
            style={{
              width: "200px",
              height: "auto"
            }}
          />
        </Link>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/equipo" active={location.pathname === "/equipo"}>
              Equipo
            </Nav.Link>
            <Nav.Link as={Link} to="/clientes" active={location.pathname === "/clientes"}>
              Clientes
            </Nav.Link>

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
// src/components/NavBar.jsx
import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-2.svg";
import '../assets/css/navbar.css';

function Navigation() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      variant="dark" 
      className="py-3 navbar-custom"
      expanded={expanded}
      onToggle={(newExpanded) => setExpanded(newExpanded)}
    >
      <Container>
        <Link to="/" className="d-flex align-items-center ms-3 text-decoration-none" onClick={handleLinkClick}>
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

            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === "/"}
              onClick={handleLinkClick}
            >
              Inicio
            </Nav.Link>

             <Nav.Link 
              as={Link} 
              to="/empresa" 
              active={location.pathname === "/empresa"}
              onClick={handleLinkClick}
            >
              Empresa
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/hacemos" 
              active={location.pathname === "/hacemos"}
              onClick={handleLinkClick}
            >
              Qué Hacemos
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/servicios" 
              active={location.pathname === "/servicios"}
              onClick={handleLinkClick}
            >
              Servicios
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/equipo" 
              active={location.pathname === "/equipo"}
              onClick={handleLinkClick}
            >
              Equipo
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/clientes" 
              active={location.pathname === "/clientes"}
              onClick={handleLinkClick}
            >
              Clientes
            </Nav.Link>

            <Button 
              className="btn-advisory ms-lg-3 px-4" 
              href="mailto:contacto@imperiumasesorias.cl"
              onClick={handleLinkClick}
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
import React from "react"
import icono from '../../images/ghostnetisotipo.png'
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import "../../styles/Tienda.css";


function NavBar ()  {
    return (
      <div>
      <Navbar className="navs" expand="lg" fixed="top">
      <Container className="nav-links">
              <Nav.Link as={Link} to="/" className="nav-item"> GhostNet</Nav.Link> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className=" nav-links ms-auto " >
                  <Nav.Link as={Link} to="/nosotros" className="nav-item ">Nosotros</Nav.Link>
                  <Nav.Link as={Link} to="/contacto" className="nav-item ">Contacto</Nav.Link>
                  <Nav.Link as={Link} to="/tienda" className="nav-item ">Tienda</Nav.Link>
                  <Nav.Link as={Link} to="/cart" className="nav-item "><CartWidget/></Nav.Link>   
              </Nav>
              </Navbar.Collapse>                           
      </Container> 
      </Navbar>
</div>
)}


export default NavBar;    
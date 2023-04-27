import React from "react"
import icono from '../../images/ghostnetisotipo.png'
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import "../../styles/Tienda.css";


function NavBar ()  {
    return (
      <div>
      <Navbar className="navs" expand="xl" fixed="top">  
           <Nav.Link as={Link} to="/" className="nav-item ms-5"> GhostNet</Nav.Link> 
              <Navbar.Toggle className="navbar-toggler me-4" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="navbar-collapse " id="basic-navbar-nav" >
              <Nav className=" nav-links ms-auto " >
                  <Nav.Link as={Link} to="/nosotros" className="nav-item me-5 p-1">Nosotros</Nav.Link>
                  <Nav.Link as={Link} to="/contacto" className="nav-item me-5 p-1">Contacto</Nav.Link>
                  <Nav.Link as={Link} to="/tienda" className="nav-item me-5 p-1">Tienda</Nav.Link>
                  <Nav.Link as={Link} to="/cart" className="nav-item me-5 p-1 cart-widget "><CartWidget/></Nav.Link>   
              </Nav>
              </Navbar.Collapse>                           
      </Navbar>
</div>
)}


export default NavBar;    
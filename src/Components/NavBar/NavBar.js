import React from "react"
import icono from '../../images/ghostnetisotipo.png'
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavBar ()  {
    return (
      <div>

         {/*
      <nav className="nav sticky-top">
          <div  className="brand">        
            <img src={icono} alt="icono"  />        
           <a href="/"> Ghosnet</a>    
          </div>
       
          <div className="nav-links">
          <ul >            
              <li> <a className="nav-item" href="../index.js"> Inicio </a> </li>
              <li> <a className="nav-item" href="../pages/nosotros.js"> Nosotros </a> </li>
              <li> <a className="nav-item" href="../pages/contacto.js"> Contacto </a> </li>
              <li> <a className="nav-item" href="../pages/tienda"> Tienda </a> </li>
              <li><a className="cart" href="../pages/cart"> <CartWidget /> </a></li>
          </ul>
        </div>
      </nav>
    */}
      <Navbar className="nav sticky-top" expand="lg">
      <Container className="nav-links">
              <Nav.Link as={Link} to="/" className="nav-item"> GhostNet</Nav.Link> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="nav-links">
                  <Nav.Link as={Link} to="/nosotros" className="nav-item ">Nosotros</Nav.Link>
                  <Nav.Link as={Link} to="/contacto" className="nav-item ">Contacto</Nav.Link>
                  <Nav.Link as={Link} to="/tienda" className="nav-item ">Tienda</Nav.Link>
                  <Nav.Link as={Link} to="/cart" className="nav-item "><CartWidget/></Nav.Link>
                  
                 
               {/*    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/category/Cargadores" className="header-link">Cargadores</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to="/category/Periféricos" className="header-link">Periféricos</NavDropdown.Item>
                      <NavDropdown.Divider />                                    
                      <NavDropdown.Item as={Link} to="/category/Equipos" className="header-link">Equipos</NavDropdown.Item>
                  </NavDropdown>      */ }    
              </Nav>
              </Navbar.Collapse>                           
      </Container> 
      </Navbar>
</div>
)}


export default NavBar;    
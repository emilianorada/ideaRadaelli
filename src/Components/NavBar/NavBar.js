import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; 
import { Link } from "react-router-dom";


export const NavBar1 = () => {
    return (
            <Navbar className="navBg" expand="lg">
                    <Container>
                            <Navbar.Brand as={Link} to="/"> GhostNet</Navbar.Brand> 
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/nosotros" className="header-link">Nosotros</Nav.Link>
                                <Nav.Link as={Link} to="/contacto" className="header-link">Contacto</Nav.Link>
                                <Nav.Link as={Link} to="/tienda" className="header-link">Tienda</Nav.Link>
                                
                                {/*
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/category/Cargadores" className="header-link">Cargadores</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/category/Periféricos" className="header-link">Periféricos</NavDropdown.Item>
                                    <NavDropdown.Divider />                                    
                                    <NavDropdown.Item as={Link} to="/category/Equipos" className="header-link">Equipos</NavDropdown.Item>
                                </NavDropdown>
                                */ }
                                
                            </Nav>
                        </Navbar.Collapse>                           
                    </Container> 
            </Navbar>
            )
}







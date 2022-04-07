import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; 
import { BrowserRouter as Router, Switch, Route, Outlet, Link } from "react-router-dom";

{  }
const NavBar1 = () => {
    return (


        
    <>{/*
    <Navbar className="navBg"  expand="lg">

  <Container>
        <Navbar.Brand href="#home">
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>

    <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>

  </Container>
    </Navbar>
    <section>
        <outlet>

        </outlet>
    </section>
    */}

<nav className="navbar navbar-expand-lg navBg sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">GhostNet</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tienda</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>







    </>

    )
};




export default NavBar1







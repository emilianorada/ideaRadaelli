import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; 
import { BrowserRouter as Router, Switch, Route, Outlet, Link } from "react-router-dom";

{  }
const NavBar1 = () => {
    return (


        
    <>
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


    </>

    )
};




export default NavBar1







import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function TavNarBar()
{
    return(
        <Navbar bg="info" data-bs-theme="light" className="bg-body-tertiary navbar-dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" style={{"color": "white"}} to="/">Home</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" style={{"color": "white"}} to="/Cart">Cart</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TavNarBar;
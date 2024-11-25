import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function TavNarBar()
{
    return(
        <Navbar expand="lg" bg="info" data-bs-theme="light" className="bg-body-tertiary navbar-dark col-12 p-3" sticky="top">
            <Container>
                <Navbar.Brand className="navbar-brand" as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav as={Navbar.Brand} className="navbar-brand mr-auto">
                    <NavDropdown className="navbar-brand" title="Ink & Toner" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/products/ink/hp">HP</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/ink/brother">Brother</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/ink/canon">Canon</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/ink/epson">Epson</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/ink/od">OD Brand</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav as={Navbar.Brand} className="navbar-brand me-auto">
                    <NavDropdown className="navbar-brand" title="Printers" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/products/printers/hp">HP</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/printers/brother">Brother</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/printers/canon">Canon</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/printers/epson">Epson</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Navbar.Brand className="navbar-brand" as={Link} to="/cart">Cart</Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TavNarBar;

/*
<Navbar bg="info" data-bs-theme="light" className="bg-body-tertiary navbar-dark col-12 p-3" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav me-auto">
                    <Link className="navbar-brand" to="/">Home</Link>

                    <Nav className="me-auto align-items-center">
                        <NavDropdown title="Ink & Toner" color="white" id="basic-nav-dropdown">
                            <Nav.Item>
                                <Link className="dropdown-item" to="/products/ink/hp">HP</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="dropdown-item" to="/products/ink/brother">Brother</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="dropdown-item" to="/products/ink/canon">Canon</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="dropdown-item" to="/products/ink/od">Office Depot Brand</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="dropdown-item" to="/products/ink/epson">Epson</Link>
                            </Nav.Item>
                        </NavDropdown>
                    </Nav>
                    
                    <Nav.Item className="align-items-center">
                        <Link className="dropdown-item m-0" style={{"color": "white"}} to="/Cart">Cart</Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
*/
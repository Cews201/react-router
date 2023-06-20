import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Navbar';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Inicio from "../pages/Inicio";
import NavDropdown from 'react-bootstrap/NavDropdown';



const MainTemplate = () =>{

    return(
        <>
        <BrowserRouter>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"> Grupo FrontEnd</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/pag-inicio">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/pag-nosotros">Quienes Somos</Nav.Link>
                            <Nav.Link as={Link} to="/pag-contacto">Contacto</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="#deets">
                                <Badge bg="secondary">
                                    IDIOMA
                                </Badge> 
                            </Nav.Link>

                            <Nav.Link eventKey={2} href="#memes">
                                <Badge bg="success">
                                    TEMA
                                </Badge> 
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route path="/pag-inicio" element={ <Inicio/> } />
                    <Route path="/pag-nosotros" element={ <Nosotros/> } />
                    <Route path="/pag-contacto" element={ <Contacto/> } />
                    
                </Routes>
            </Container>
        </BrowserRouter>            
        </>
    )
}

export default MainTemplate;
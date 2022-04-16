import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar sticky='top' className='py-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/home'>Pro Developer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='#services'>Services</Nav.Link>
                    <Nav.Link as={Link} to='#blogs'>Blogs</Nav.Link>
                    <Nav.Link as={Link} to='about'>About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to='/registration'>Registration</Nav.Link> 
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
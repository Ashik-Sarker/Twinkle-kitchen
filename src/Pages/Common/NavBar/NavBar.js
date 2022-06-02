import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

     const logout = () => {
         signOut(auth);
         navigate('/');
    };
    return (
        <Navbar sticky='top' className='py-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/'>Twinkle Kitchen pro</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/services'>Food Items</Nav.Link>
                    <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                </Nav>
                    <Nav>
                        {
                            user
                                ?
                                <Nav.Link className='fs-4' onClick={logout} as={Link} to='/login'>LogOut</Nav.Link>
                                :
                                <Nav.Link className='fs-4' as={Link} to='/login'>LogIn</Nav.Link>
                        }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import userLogo from '../../../images/60111.jpg'
import { Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import './bootstrap.min.css'
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth()
    const [isBg, setIsBg] = useState(false)

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            setIsBg(true)
        }
        else {
            setIsBg(false)
        }
    });
    return (
        <Navbar collapseOnSelect expand="lg" className={`fixed-top nav-bg navbar-dark ${isBg ? 'bg-white' : ''}`}>
            <Container>
                <Navbar.Brand className='d-flex align-items-center'>
                    <div>
                        <Nav.Link as={HashLink} to="/home#home">
                            <span className='fw-bolder m-0 p-0 fs-4 text-warning'>Motivo&nbsp;</span>
                            <span className='m-0 p-0 fs-4 fw-bolder'>Store</span>
                        </Nav.Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="ms-auto d-flex align-items-center navLink-bg">
                        <NavLink className='me-lg-3' style={{ textDecoration: 'none', color: 'black' }} to="/explore" activeStyle={{
                            color: "green"
                        }}><span className='fw-bolder'>EXPLORE</span></NavLink>
                        {user?.email ? <div className='d-lg-flex justify-content-center align-items-center'>

                            <div className='d-flex justify-content-center flex-lg-row flex-column align-items-center'>
                                <NavLink className='me-lg-3' style={{ textDecoration: 'none', color: 'black' }} to="/dashboard" activeStyle={{
                                    color: "green"
                                }}><span className='fw-bolder'>DASHBOARD</span></NavLink>
                                <Nav.Link className='me-lg-3 text-uppercase' style={{ textDecoration: 'none', color: 'black' }}><button className='btn btn-warning' onClick={logout}>Logout</button></Nav.Link>
                            </div>

                            <div className='d-flex align-items-center'>
                                <Typography sx={{ mr: 1 }}>{user.displayName}</Typography>
                                <NavLink to='/dashboard' className='ms-lg-0 ms-2'>
                                    <img width='40px' className='border rounded-circle' src={userLogo} alt="" />
                                </NavLink>
                            </div>
                        </div> : <NavLink className='me-lg-3' style={{ textDecoration: 'none', color: 'black' }} to="/login" activeStyle={{
                            color: "green"
                        }}><span className='fw-bolder'>LOGIN</span></NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
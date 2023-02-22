import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import userLogo from '../../../images/60111.jpg'
import { Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './bootstrap.min.css'
import './Header.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {
    const { user, logout } = useAuth();
    const [isBg, setIsBg] = useState(false)
    const [orders, setOrders] = useState([])

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            setIsBg(true)
        }
        else {
            setIsBg(false)
        }
    });
    useEffect(() => {
        const url = `https://motivo-store-server.vercel.app/ordersCollection?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
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

                            </div>
                            <div className='d-flex justify-content-center flex-lg-row flex-column align-items-center'>
                                <NavLink className='me-lg-3' to="/dashboard"> <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={orders.length} color="primary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton></NavLink>
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
                        <NavItem>{user.metadata.lastSignInTime}</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
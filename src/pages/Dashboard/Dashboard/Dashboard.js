import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from "react-router-dom";
import Payment from '../Payment/Payment';
import OrderCollection from './../OrdersCollection/OrdersCollection';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import DashboardExplore from '../../Dashboard/DashboardExplore/DashboardExplore';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import { Avatar } from '@mui/material';
import logo from '../../../images/60111.jpg'
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';



const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box>
                            <Typography variant="h6" noWrap component="div">
                                Dashboard
                            </Typography>
                            <Typography variant="subtitle2" noWrap component="div">
                                Welcome, {user.displayName}
                            </Typography>
                        </Box>
                        <Box>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'> <Button color="inherit">Back To Home</Button></Link>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Router>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >

                            <Toolbar />
                            <Divider />
                            <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <Box>
                                    <ListItem  >
                                        <ListItemText>
                                            <Avatar
                                                alt={user.displayName}
                                                src={logo}
                                                sx={{ width: 70, height: 70 }}
                                            />
                                        </ListItemText>
                                    </ListItem>
                                </Box>
                                <Link style={{ textDecoration: 'none' }} to='/dashboard/myOrders'>
                                    <ListItem button >
                                        <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                            MY ORDERS
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/dashboard/payment'>
                                    <ListItem button >
                                        <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                            PAYMENT
                                        </Typography>
                                    </ListItem>
                                </Link>

                                <Link style={{ textDecoration: 'none' }} to='/dashboard/review'>
                                    <ListItem button >
                                        <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                            REVIEW US
                                        </Typography>
                                    </ListItem>
                                </Link>
                                {admin &&
                                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/manageAllOrders'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    MANAGE ORDERS
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/addProducts'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    ADD PRODUCTS
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/manageProducts'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    MANAGE PRODUCTS
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/makeAdmin'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    MAKE ADMIN
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                    </Box>}
                                <Box sx={{ mt: 5 }}>
                                    {user.email && <ListItem>
                                        <ListItemText>
                                            <Button onClick={logout} variant="contained">Logout</Button>
                                        </ListItemText>
                                    </ListItem>}
                                </Box>
                            </List>
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            <Toolbar />
                            <Divider />
                            <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <Box>
                                    <ListItem  >
                                        <ListItemText>
                                            <Avatar
                                                alt={user.displayName}
                                                src={logo}
                                                sx={{ width: 70, height: 70 }}
                                            />
                                        </ListItemText>
                                    </ListItem>
                                </Box>
                                <Link style={{ textDecoration: 'none' }} to='/dashboard/myOrders'>
                                    <ListItem button >
                                        <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                            MY ORDERS
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/dashboard/payment'>
                                    <ListItem button >
                                        <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                            PAYMENT
                                        </Typography>
                                    </ListItem>
                                </Link>

                                <Link style={{ textDecoration: 'none' }} to='/dashboard/review'>
                                    <ListItem button >
                                        <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                            REVIEW US
                                        </Typography>
                                    </ListItem>
                                </Link>
                                {admin &&
                                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/manageAllOrders'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    MANAGE ORDERS
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/addProducts'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    ADD PRODUCTS
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/manageProducts'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    MANAGE PRODUCTS
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard/makeAdmin'>
                                            <ListItem button >
                                                <Typography sx={{ fontWeight: 'bold', color: '#1976D2' }} variant='h6'>
                                                    MAKE ADMIN
                                                </Typography>
                                            </ListItem>
                                        </Link>
                                    </Box>}
                                <Box sx={{ mt: 5 }}>
                                    {user.email && <ListItem>
                                        <ListItemText>
                                            <Button onClick={logout} variant="contained">Logout</Button>
                                        </ListItemText>
                                    </ListItem>}
                                </Box>
                            </List>
                        </Drawer>
                    </Box>


                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >

                        <Toolbar />
                        <Switch>
                            <Route exact path='/dashboard'>
                                <OrderCollection></OrderCollection>
                            </Route>
                            <Route path='/dashboard/myOrders'>
                                <OrderCollection></OrderCollection>
                            </Route>
                            <Route path='/dashboard/payment'>
                                <Payment></Payment>
                            </Route>
                            <Route path='/dashboard/review'>
                                <Review></Review>
                            </Route>
                            <AdminRoute path='/dashboard/manageAllOrders'>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path='/dashboard/addProducts'>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path='/dashboard/manageProducts'>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path='/dashboard/makeAdmin'>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <Route path='/dashboard/explore'>
                                <DashboardExplore></DashboardExplore>
                            </Route>
                        </Switch>

                    </Box>
                </Router>
            </Box >

        </div >
    );
};
Dashboard.propTypes = {
    window: PropTypes.func,
};
export default Dashboard;
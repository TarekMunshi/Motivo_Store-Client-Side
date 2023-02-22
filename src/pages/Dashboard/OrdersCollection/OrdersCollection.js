import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
const OrdersCollection = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://motivo-store-server.vercel.app/ordersCollection?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const orderCancelHandler = id => {
        const proceed = window.confirm('Are You Sure Want to Cancel Your Order?');
        if (proceed) {
            const url = `https://motivo-store-server.vercel.app/ordersCollection/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order Canceled')
                        const remaining = orders.filter(item => item._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell >Order Id</TableCell>
                            <TableCell >Quantity</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell >{row.email}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell >{row.productName}</TableCell>
                                <TableCell >{row._id}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>x{row.quantity}</TableCell>
                                <TableCell >{row.status === 'approved' ? <span className='text-success'>{row.status}</span> : <span className='text-danger'>{row.status}</span>}</TableCell>
                                <TableCell >{row.price}</TableCell>
                                <TableCell>{row.status === 'approved' ? <h6 onClick={() => alert('If Your Want To Cancel Your Order, Then Please Contact With Us. Thank You.')} className='mt-2 text-black-50' style={{ cursor: 'pointer' }}>Cancel</h6> : <h6 className='mt-2' style={{ color: 'green', cursor: 'pointer' }} onClick={() => orderCancelHandler(row._id)} variant="text">Cancel</h6>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Link to='/dashboard/explore' style={{ textDecoration: 'none' }}>
                    <Button variant="contained">Buy More</Button>
                </Link>
            </Box>

        </>
    );
};

export default OrdersCollection;
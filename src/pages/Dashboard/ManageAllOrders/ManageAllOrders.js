import React, { useEffect, useState } from 'react';
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
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const action = (id) => {
        const url = `https://motivo-store-server.vercel.app/ordersCollection/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Update Successful')
                }
            })
    }

    useEffect(() => {
        const url = `https://motivo-store-server.vercel.app/allOrdersCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const orderCancelHandler = id => {
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

                            < TableRow
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
                                <TableCell > {row.status === 'approved' ? <span className='text-success'>{row.status}</span> : <span className='text-danger'>{row.status}</span>}</TableCell>
                                <TableCell >{row.price}</TableCell>
                                <TableCell >
                                    <div class="dropdown">
                                        <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                        </button>
                                        <ul class="dropdown-menu text-center " aria-labelledby="dropdownMenuButton1">
                                            <li><h6 className='mt-2' style={{ color: 'red', cursor: 'pointer' }} onClick={() => orderCancelHandler(row._id)} variant="text">Delete</h6></li><hr />
                                            <li><h6 className='mt-2' style={{ color: 'green', cursor: 'pointer' }} onClick={() => action(row._id)} variant="text">Approved</h6></li>
                                        </ul>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default ManageAllOrders;
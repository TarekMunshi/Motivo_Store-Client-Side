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
import { CircularProgress } from '@mui/material';

const ManageProducts = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://evening-island-27885.herokuapp.com/productsCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const orderCancelHandler = id => {
        const url = `https://evening-island-27885.herokuapp.com/productsCollection/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Removed Successful')
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
                            <TableCell>Product Name (Total:{orders.length})</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell >Id</TableCell>
                            <TableCell >RAM</TableCell>
                            <TableCell >ROM</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {orders.length &&
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell >{row.name}</TableCell>
                                    <TableCell sx={{ textAlign: 'justify' }}><img width='20px' src={row.img} alt="" /></TableCell>
                                    <TableCell >{row._id}</TableCell>
                                    <TableCell >{row.ram}</TableCell>
                                    <TableCell >{row.rom}</TableCell>
                                    <TableCell >{row.price}</TableCell>
                                    <TableCell > <h6 className='mt-2' style={{ color: 'red', cursor: 'pointer' }} onClick={() => orderCancelHandler(row._id)} variant="text">Remove</h6></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    }
                </Table>
            </TableContainer>
            {
                !orders.length && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Link to='/dashboard/addProducts' style={{ textDecoration: 'none' }}>
                    <Button variant="contained">Add Products</Button>
                </Link>
            </Box>
        </>
    );
};

export default ManageProducts;
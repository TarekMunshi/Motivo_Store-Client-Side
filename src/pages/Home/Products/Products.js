import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://evening-island-27885.herokuapp.com/productsCollection')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, []);


    return (
        <>
            <div className='mt-5 mb-5' id='products'>
                <h2 className='text-center'>Add a little joy to your cart.</h2>
                <div className='container mt-5'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </Row>
                    <Box sx={{
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography component="div">
                            <Link style={{ textDecoration: 'none' }} to='/explore'> <Button style={{ color: 'black' }} sx={{ fontSize: 'h6.fontSize', fontWeight: 'bold' }} variant="text">Explore More</Button></Link>
                        </Typography>
                    </Box>
                </div>
            </div >
        </>
    );
};

export default Products;
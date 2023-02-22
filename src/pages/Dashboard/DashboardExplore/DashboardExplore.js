import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ExploreProducts from '../../ExploreProducts/ExploreProducts';
const DashboardExplore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://motivo-store-server.vercel.app/productsCollection')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='fw-bolder mt-3 text-center'>Latest Phones</h1><hr />
            {products.length && <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {
                    products.map(explore => <ExploreProducts key={explore.item} explore={explore}></ExploreProducts>)
                }

            </Row>}
            {
                !products.length && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
        </div>
    );
};

export default DashboardExplore;
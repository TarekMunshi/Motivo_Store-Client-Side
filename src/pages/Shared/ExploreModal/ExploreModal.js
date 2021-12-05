import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, MenuItem, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const currencies = [
    {
        value: 'Visa Card',
        label: 'Visa Card',
    },
    {
        value: 'Paypal',
        label: 'Paypal'
    },
    {
        value: 'American Express',
        label: 'American Express'
    },
    {
        value: 'Cash On Delivery',
        label: 'Cash On Delivery'
    },
];
const ExploreModal = ({ open, handleClose, explore }) => {
    const { user } = useAuth()
    const { name, price } = explore;
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '', paymentMethod: '', quantity: '', status: 'pending' }
    const [productInfo, setProductInfo] = useState(initialInfo)
    console.log(productInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo }
        newInfo[field] = value;
        setProductInfo(newInfo)
    }
    const handleBuySubmit = e => {
        const orderInfo = {
            ...productInfo,
            productName: name,
            price: price,
        }
        fetch('https://evening-island-27885.herokuapp.com/ordersCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Order Confirm Successful')
                    handleClose();
                }
            })

        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography variant="h6" component='div'>
                        <Box sx={{ textAlign: 'center', mb: 1 }}>
                            {name}
                        </Box>
                    </Typography>
                    <form onSubmit={handleBuySubmit}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={12} >
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    placeholder='Your Name'
                                    name='customerName'
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    placeholder='Your Email'
                                    name='email'
                                    onBlur={handleOnBlur}
                                    value={user.email}
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    placeholder='Price'
                                    defaultValue={'$' + price}
                                    variant="standard" disabled />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    placeholder='Quantity'
                                    type='number'
                                    onBlur={handleOnBlur}
                                    name='quantity'
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    onBlur={handleOnBlur}
                                    placeholder='Shipping Address'
                                    name='address'
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    placeholder='Phone Number'
                                    onBlur={handleOnBlur}
                                    name='phone'
                                    variant="standard"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    placeholder='Choose Delivery Method'
                                    select
                                    name='paymentMethod'
                                    value='Cash On Delivery'
                                    onBlur={handleOnBlur}
                                    variant="standard" >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField sx={{ width: '100%' }}
                                    id="standard-basic"
                                    name='status'
                                    value='pending'
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Button type='submit' variant="contained">Confirm</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ExploreModal;
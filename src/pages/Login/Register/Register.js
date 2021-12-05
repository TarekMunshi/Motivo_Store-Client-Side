import { TextField, Box, CircularProgress, Alert } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password1) {
            alert('Your Password Did not Match')
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <div className='container mt-5'>
                <h2 className='text-center'> Register</h2>
                {!isLoading && <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '400px', }}>
                        <TextField
                            required
                            sx={{ mb: 2 }}
                            id="standard-basic"
                            label="Your Name"
                            type='text'
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            required
                            sx={{ mb: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            required
                            sx={{ mb: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            required
                            id="standard-basic"
                            label="ReType Your Password"
                            type='password'
                            name='password1'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Box sx={{ mt: 3 }}>
                            <Button variant="contained" type='submit'>Register</Button>
                        </Box>
                    </Box>
                </form>}
                {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>}
                {authError && <Alert severity="error" sx={{ mt: 2 }}>{authError}</Alert>}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Link to='/login' style={{ textDecoration: 'none' }}> <Button variant="text">Already Have A Account? Login Here</Button></Link>
                </Box>
            </div>
        </div>
    );
};

export default Register;
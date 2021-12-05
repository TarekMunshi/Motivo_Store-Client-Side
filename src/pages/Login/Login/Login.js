import { Alert, Box, CircularProgress, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError, isLoading } = useAuth()

    const history = useHistory();
    const location = useLocation()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <div className='container mt-5'>
                <h2 className='text-center'>Login</h2>
                {!isLoading && <form onSubmit={handleLoginSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '400px', }}>
                        <TextField
                            required
                            sx={{ mb: 2 }}
                            id="standard-basic"
                            label="Email"
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            required
                            id="standard-basic"
                            label="Password"
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Box sx={{ mt: 3 }}>
                            <Button variant="contained" type='submit'>Login</Button>
                        </Box>
                    </Box>
                </form>}
                {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>}
                {authError && <Alert sx={{ mt: 2 }} severity="error">{authError}</Alert>}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Link to='/register' style={{ textDecoration: 'none' }}> <Button variant="text">New Here? Please Register!!</Button></Link>
                </Box>
            </div>
        </div>
    );
};

export default Login;
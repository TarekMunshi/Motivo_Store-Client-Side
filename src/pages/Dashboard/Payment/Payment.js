import React from 'react';
import logo from '../../../images/New Project.png'
const Payment = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
            <h2 className=' text-success'>Online Payment Method Not Available Now.</h2>
            <img className='img-fluid' src={logo} alt="" />
            <h5 className='text-primary'>Coming Soon</h5>
        </div>
    );
};

export default Payment;